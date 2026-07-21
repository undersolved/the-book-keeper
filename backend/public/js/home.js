async function init() {
	const books = await getBooks();

	console.log(books);
}

init();
