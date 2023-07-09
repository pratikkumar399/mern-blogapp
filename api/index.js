const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = 'mysecretsshhh';

// lets tell the cors that we are using credentials for the cookie
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());

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
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // logged in
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        });
    } else {
        res.status(400).json('wrong credentials');
    }
});


app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, decoded) => {
        if (err) {
            res.status(401).json(err);
        }
        else {
            res.json(decoded);
        }
    });
    // res.json(req.cookies);
});


app.post('/logout', (req, res) => {
    res.cookie('token', '').json({ status: 200, message: 'Logged Out Successfully' });
});

// /mongodb+srv://mernblog:lo7lCUKprwmeQjE1@cluster0.yaqmx7s.mongodb.net/?retryWrites=true&w=majority
app.listen(8080, () => console.log('Server running on port 8080'));