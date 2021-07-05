let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    let book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
    displayBooks(myLibrary);
}

function getBookReadStatus(checkbox) {
    if (checkbox.checked) {
        return true;
    }
    else {
        return false;
    }
}

function clearBookShelf(bookShelf) {
    while (bookShelf.lastElementChild) {
        bookShelf.removeChild(bookShelf.lastElementChild);
    }
}

function displayBooks(myLibrary) {
    const bookShelf = document.querySelector('#book-shelf');
    clearBookShelf(bookShelf);


    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.setAttribute('id', 'book-card')
        bookCard.setAttribute('data-bookid', myLibrary.indexOf(book));

        const bookCardButtons = document.createElement('div');
        bookCardButtons.setAttribute('id', 'book-card-buttons');

        const title = document.createElement('h1');
        const author = document.createElement('h2');
        const pages = document.createElement('h5');
        const readStatus = document.createElement('button');

        const removeButton = document.createElement('button');
        removeButton.setAttribute('id', 'book-remove-button');
        removeButton.textContent = "Remove";

        title.textContent = `"${book.title}"`;
        author.textContent = book.author;
        pages.textContent = book.pages;
        if (book.readStatus == true) {
            readStatus.textContent = "Read";
        }
        else {
            readStatus.textContent = "Not Read";
        }
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);

        bookCardButtons.appendChild(readStatus);
        bookCardButtons.appendChild(removeButton);

        bookCard.appendChild(bookCardButtons);

        bookShelf.appendChild(bookCard);
    });

    onRemoveButtonClick(myLibrary);
}


function onRemoveButtonClick(myLibrary) {
    const bookRemoveButton = document.querySelectorAll('#book-remove-button');
    bookRemoveButton.forEach(button => {
        button.addEventListener('click', () => {
            myLibrary.splice((button.parentElement).parentElement.dataset.bookid, 1);
            displayBooks(myLibrary);
        })
    });
}

function openForm() {
    document.querySelector('.form-popup').style.display = 'block';
    document.querySelector('#overlay').style.display = 'block';

    window.onclick = (event) => {
        const overlay = document.getElementById('overlay');
        if (event.target == overlay) {
            closeForm();
        }
    }
}

function closeForm() {
    document.querySelector('.form-popup').style.display = 'none';
    document.querySelector('#overlay').style.display = 'none';
}




const bookForm = document.querySelector('.book-form');
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    const readStatus = getBookReadStatus(document.querySelector('#book-read-status'));

    addBookToLibrary(title, author, pages, readStatus);
    bookForm.reset();
    closeForm();
});


document.querySelector('#add-book-button').addEventListener('click', () => {
    openForm();
})

