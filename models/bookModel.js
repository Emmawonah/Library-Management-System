const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String },
    publishedDate: { type: Date },
    copiesAvailable: { type: Number, default: 1 },
    isBorrowed: { type: Boolean, default: false },
    borrowedBy: { type: String, default: null }, // Borrower's name or ID
    borrowedDate: { type: Date, default: null },
    returnDate: { type: Date, default: null },
});

module.exports = mongoose.model('Book', bookSchema);