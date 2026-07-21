const BASE_URL = "";

async function getBooks() {
	const response = await fetch(`${BASE_URL}/books`);

	if (!response.ok) {
		throw new Error("Failed to fetch books");
	}

	return await response.json();
}

async function createBook(book) {
	const response = await fetch(`${BASE_URL}/books`, {
		method: "POST",

		headers: {
			"Content-Type": "application/json",
		},

		body: JSON.stringify(book),
	});

	if (!response.ok) {
		throw new Error("Failed to create book");
	}

	return await response.json();
}

async function deleteBook(id) {
	const response = await fetch(`${BASE_URL}/books/${id}`, {
		method: "DELETE",
	});

	if (!response.ok) {
		throw new Error("Failed to delete book");
	}

	return await response.json();
}
