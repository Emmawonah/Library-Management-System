const mongoose = require('mongoose');

require('dotenv').config()


// MongoDB connection URI
// const mongoURI = 'mongodb+srv://emmawonah:@201010Wonah@cluster0.ylu9ea3.mongodb.net/'; 

// Connecting to MongoDB
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI);
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); 
    }
};

module.exports = connectToMongoDB;