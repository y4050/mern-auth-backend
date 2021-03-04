require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.MONGO_URI || "mongodb://localhost:27017/mernAuth";
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log('MongoDB connection error:', err));

module.exports = {
    Example: require('./example'),
};
