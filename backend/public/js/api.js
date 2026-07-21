const BASE_URL = "";

async function getBooks() {
	const response = await fetch(`${BASE_URL}/books`);

	const books = await response.json();

	return books;
}
