const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb+srv://emmawonah:@201010Wonah@cluster0.ylu9ea3.mongodb.net/'; 

// Connecting to MongoDB
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); 
    }
};

module.exports = connectToMongoDB;