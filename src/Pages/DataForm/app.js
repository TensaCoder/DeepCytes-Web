const express = require('express');
const bodyParser = require('body-parser');
const User = require('./userSchema');
require('./db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/data-entry/saveData', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        console.log(user);
        res.status(201).send(user);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});