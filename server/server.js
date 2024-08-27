const express = require('express');
const mongoose = require('mongoose');
const app = express();

// connect MongoDB
mongoose.connect('mongodb://localhost:27017/todo-app', {
    useUnifiedTopology: true
});

// home route
app.get('/', (req, res) => {
    res.send('Hello from the other side');
});

// import custom routes
const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});