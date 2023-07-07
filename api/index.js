const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    res.json({ requestData: { username, password } });
});



// /mongodb+srv://mernblog:lo7lCUKprwmeQjE1@cluster0.yaqmx7s.mongodb.net/?retryWrites=true&w=majority
app.listen(8080, () => console.log('Server running on port 8080'));