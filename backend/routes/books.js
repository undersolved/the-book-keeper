const express = require("express");
const router = express.Router();
const books = require("../data/books");
const {
	getAllBooks,
	createBook,
	updateBook,
	getBookById,
	deleteBook,
} = require("../controllers/booksController");

router.get("/", getAllBooks);

router.get("/:id", getBookById);

router.post("/", createBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;
