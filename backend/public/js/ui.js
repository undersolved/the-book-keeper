function createBookCard(book) {
	return `
    
    <div
        class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

        <div
            class="h-52 bg-stone-200 flex items-center justify-center text-6xl">

            📚

        </div>

        <div class="p-6">

            <h2 class="text-2xl font-bold">
                ${book.title}
            </h2>

            <p class="mt-2 text-gray-500">
                ${book.author}
            </p>

            <span
                class="inline-block mt-4 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">

                ${book.genre}

            </span>

            <div
                class="mt-5 flex justify-between items-center">

                <span class="text-xl font-bold">

                    ₹${book.price}

                </span>

            </div>

            <div class="mt-6 flex gap-3">

                <button
                    class="library-btn flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
                    data-id="${book.id}">

                    Add To Library

                </button>

                <button
                    class="delete-btn px-5 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    data-id="${book.id}">

                    Delete

                </button>

            </div>

        </div>

    </div>

    `;
}

function renderBooks(books) {
	const booksContainer = document.getElementById("booksContainer");

	if (books.length === 0) {
		booksContainer.innerHTML = `
        
        <div class="col-span-full text-center py-20">

            <div class="text-6xl">
                📚
            </div>

            <h2 class="text-2xl mt-5 font-semibold">
                No Books Found
            </h2>

            <p class="mt-3 text-gray-500">
                Try another search.
            </p>

        </div>
        `;

		return;
	}

	const cards = books.map(createBookCard);

	booksContainer.innerHTML = cards.join("");
}
