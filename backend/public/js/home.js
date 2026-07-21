let books = [];

async function refreshBooks() {
	books = await getBooks();
	renderBooks(books);
}

async function init() {
	await refreshBooks();

	setupSearch();
	setupBookForm();
	setupBookActions();
}

function setupSearch() {
	const searchInput = document.getElementById("search");

	searchInput.addEventListener("input", () => {
		const searchTerm = searchInput.value.trim().toLowerCase();

		const filteredBooks = books.filter((book) =>
			book.title.toLowerCase().includes(searchTerm),
		);

		renderBooks(filteredBooks);
	});
}

function setupBookForm() {
	const form = document.getElementById("bookForm");

	form.addEventListener("submit", async (event) => {
		event.preventDefault();

		const book = {
			title: document.getElementById("title").value.trim(),

			author: document.getElementById("author").value.trim(),

			genre: document.getElementById("genre").value.trim(),

			price: Number(document.getElementById("price").value),
		};

		try {
			await createBook(book);

			form.reset();

			await refreshBooks();
		} catch (error) {
			console.error(error);

			alert("Unable to add book.");
		}
	});
}

function setupBookActions() {
	const booksContainer = document.getElementById("booksContainer");

	booksContainer.addEventListener("click", async (event) => {
		const button = event.target.closest("button");

		if (!button) return;

		const id = Number(button.dataset.id);

		if (button.classList.contains("delete-btn")) {
			const confirmed = confirm("Are you sure you want to delete this book?");

			if (!confirmed) return;

			try {
				await deleteBook(id);

				await refreshBooks();
			} catch (error) {
				console.error(error);

				alert("Unable to delete book.");
			}
		}

		if (button.classList.contains("library-btn")) {
			alert(`Book ID ${id} added to library (coming soon).`);
		}
	});
}

init();
