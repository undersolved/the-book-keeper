const books = require("../data/books");

const getAllBooks = (req, res) => {
	res.status(200).json(books);
};

const getBookById = (req, res) => {
	const id = Number(req.params.id);

	const book = books.find((book) => book.id === id);

	if (!book) {
		return res.status(404).json({
			message: "Book not found",
		});
	}

	res.status(200).json(book);
};

const createBook = (req, res) => {
	const { title, author, genre, price } = req.body;

	if (!title || !author || !genre || price === undefined) {
		return res.status(400).json({
			message: "All fields are required.",
		});
	}
	const lastBook = books[books.length - 1];

	const newBook = {
		id: lastBook ? lastBook.id + 1 : 1,
		title,
		author,
		genre,
		price,
	};

	books.push(newBook);
	res.status(201).json(newBook);
};

const updateBook = (req, res) => {
	const id = Number(req.params.id);
	const book = books.find((book) => book.id === id);

	if (!book) {
		return res.status(404).json({
			message: "book not found",
		});
	}

	if (!title || !author || !genre || price === undefined) {
		return res.status(404).json({
			message: "Enter all fields",
		});
	}

	const { title, author, genre, price } = req.body;

	book.title = title;
	book.author = author;
	book.genre = genre;
	book.price = price;

	res.status(200).json(book);
};

const deleteBook = (req, res) => {
	const id = Number(req.params.id);

	const index = books.findIndex((book) => book.id === id);

	if (index === -1) {
		return res.status(404).json({
			message: "Book not found",
		});
	}

	books.splice(index, 1);

	res.status(200).json({
		message: "Book deleted successfully",
	});
};

module.exports = {
	getAllBooks,
	getBookById,
	createBook,
	updateBook,
	deleteBook,
};
