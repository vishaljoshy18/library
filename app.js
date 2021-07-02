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


function getBookReadStatus (checkbox){
    if(checkbox.checked){
        return true;
    }
    else{
        return false;
    }
}


document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    const readStatus = getBookReadStatus(document.querySelector('#book-read-status'));
    
    addBookToLibrary(title,author,pages,readStatus);
    displayBooks(myLibrary);
});

