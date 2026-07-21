function createBookCard(book) {
	return `
    
    <div class="bg-white rounded-xl shadow-lg p-5">

        <h2 class="text-2xl font-bold">

            📚 ${book.title}

        </h2>

        <p class="text-gray-500 mt-2">

            ${book.author}

        </p>

        <span
            class="inline-block mt-3 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">

            ${book.genre}

        </span>

        <p
            class="mt-4 text-xl font-bold">

            ₹${book.price}

        </p>

        <button
            class="mt-5 w-full bg-black text-white py-2 rounded-lg">

            Add To Library

        </button>

    </div>

    `;
}

function renderBooks(books) {
	const booksContainer = document.getElementById("booksContainer");

	const cards = books.map(createBookCard);

	booksContainer.innerHTML = cards.join("");
}
