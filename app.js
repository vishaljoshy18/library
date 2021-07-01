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
}

function displayBooks(myLibrary) {
    myLibrary.forEach(book => {
        console.log(book);
    });
}

addBookToLibrary('harry potter ', ' jk ', 690, true);
addBookToLibrary('harry potter 2 ', ' jk ', 90, false);

displayBooks(myLibrary);
