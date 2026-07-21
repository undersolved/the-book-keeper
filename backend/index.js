const express = require("express");
const path = require("path");
const booksRouter = require("./routes/books");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
// 	res.send("Welcome to the Homepage of the bookstore API");
// });

app.use("/books", booksRouter);

app.listen(PORT, () => {
	console.log(`Server running on Port ${PORT}`);
});
