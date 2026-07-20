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

router.post("/", (req, res) => {
	const { title, author, genre, price } = req.body;

	if (!title || !author || !genre || price === undefined) {
		return res.status(400).json({
			message: "All fields are required.",
		});
	}
	const newBook = {
		id: books.length + 1,
		title,
		author,
		genre,
		price,
	};

	books.push(newBook);
	res.status(201).json(newBook);
});

module.exports = router;
