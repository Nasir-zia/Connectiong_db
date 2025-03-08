import express from 'express';
import connectDB from './db.js';
import User from './User.js';  
import User1 from './user1.js';   

const app = express();
app.use(express.json());

// Connect to Database
connectDB();

// Create a User
app.post('/users', async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
        const newUser = new User({ name, email, password, age });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Create a User1
app.post('/users1', async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
        const newUser1 = new User1({ name, email, password, age });
        await newUser1.save();
        res.status(201).json(newUser1);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Users1
app.get('/users1', async (req, res) => {
    try {
        const users1 = await User1.find();
        res.json(users1);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
