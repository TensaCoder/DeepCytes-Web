const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    dob: { type: String, required: true },
    involvement: { type: [String], required: true },
    selectedBadges: [String],
    courses: [String],
    internshipDuration: Number,
    internshipDomains: [String],
    employmentDuration: Number,
    employmentAreas: [String],
    recommendations: String,
});

userSchema.set('timestamps', true);

module.exports = mongoose.model('User', userSchema);