const Book = require("../models/bookModel");

// View all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// View available books only
const getAvailableBooks = async (req, res) => {
  try {
    const availableBooks = await Book.find({ isBorrowed: false });
    res.json(availableBooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new book
const addBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    return res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Borrow a book
const borrowBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { borrowerName } = req.body;

    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    if (book.isBorrowed)
      return res.status(400).json({ message: "Book is already borrowed" });

    book.isBorrowed = true;
    book.borrowedBy = borrowerName;
    book.borrowedDate = new Date();
    book.returnDate = null;

    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Return a book
const returnBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    if (!book.isBorrowed)
      return res
        .status(400)
        .json({ message: "Book is not currently borrowed" });

    book.isBorrowed = false;
    book.borrowedBy = null;
    book.borrowedDate = null;
    book.returnDate = new Date();

    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getBooks,
  getAvailableBooks,
  addBook,
  borrowBook,
  returnBook,
};
