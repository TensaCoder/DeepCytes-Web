const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bhavya:9hFndw0WIjrumkG9@contactresponses.a0ehlwo.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});