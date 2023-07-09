const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const app = express();

const salt = bcrypt.genSaltSync(10);


app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mernblog:lo7lCUKprwmeQjE1@cluster0.yaqmx7s.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        });
        res.json(userDoc);
    }
    catch (err) {
        res.status(400).json(err);
    }
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.findOne({ username });
        if (userDoc) {
            const isPasswordCorrect = bcrypt.compareSync(password, userDoc.password);
            if (isPasswordCorrect) {
                res.json({ status: 200, message: 'Login Successful' });
            }
            else {
                res.json({ status: 400, message: 'Login Failed' });
            }
        }
        else {
            res.json({ status: 400, message: 'Login Failed' });
        }
    }
    catch (err) {
        res.status(400).json(err);
    }
});


// /mongodb+srv://mernblog:lo7lCUKprwmeQjE1@cluster0.yaqmx7s.mongodb.net/?retryWrites=true&w=majority
app.listen(8080, () => console.log('Server running on port 8080'));