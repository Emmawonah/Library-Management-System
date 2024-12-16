const express = require('express');
const { getBooks, getAvailableBooks, addBook, borrowBook, returnBook } = require('../controllers/bookControler');
const router = express.Router();

/**
 * @swagger
 * /books:
 *   get:
 *     summary: View all books
 *     responses:
 *       200:
 *         description: A list of books
 */
router.get('/', getBooks);

/**
 * @swagger
 * /books/available:
 *   get:
 *     summary: View all available books
 *     responses:
 *       200:
 *         description: A list of available books
 */
router.get('/available', getAvailableBooks);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Add a new book
 *     responses:
 *       201:
 *         description: Book added
 */
router.post('/', addBook);

/**
 * @swagger
 * /books/{id}/borrow:
 *   put:
 *     summary: Borrow a book
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Book ID
 *     responses:
 *       200:
 *         description: Book borrowed
 */
router.put('/:id/borrow', borrowBook);

/**
 * @swagger
 * /books/{id}/return:
 *   put:
 *     summary: Return a borrowed book
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Book ID
 *     responses:
 *       200:
 *         description: Book returned
 */
router.put('/:id/return', returnBook);

module.exports = router;