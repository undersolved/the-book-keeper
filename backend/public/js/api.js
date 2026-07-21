const BASE_URL = "";

async function getBooks() {
	const response = await fetch(`${BASE_URL}/books`);

	if (!response.ok) {
		throw new Error("Failed to fetch books");
	}

	return await response.json();
}
