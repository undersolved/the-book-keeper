const express = require("express");
const router = express.Router();
const books = require("../data/books");

router.get("/", (req, res) => {
	res.status(200).json(books);
});

router.get("/:id", (req, res) => {
	const id = Number(req.params.id);
	const book = books.find((book) => book.id === id);

	if (!book) return res.status(404).json({ message: "Book not found" });

	res.status(200).json(book);
});

module.exports = router;
