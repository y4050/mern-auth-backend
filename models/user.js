const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true, minLength: 8},
    date: {type: Date, default: Date.now()}     // mongoose doesn't generate createdDate like sequelize
})

const User = mongoose.model('User', userSchema);

module.exports = User;