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

app.get('/data-entry/editData', async (req, res) => {
    const { name } = req.query;
    try {
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        console.log(user);
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

app.put('/data-entry/editData/saveData', async (req, res) => {

    // const { name, updatedUserData } = req.body;
    const { name } = req.query;
    const updates = req.body;
    try {
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        Object.keys(updates).forEach((key) => {
            user[key] = updates[key];
        });
        // updates.forEach((update) => {
        //     user[update] = updatedUserData[update];
        // });
        await user.save();
        console.log(user);
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});