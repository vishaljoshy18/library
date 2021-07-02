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

function getBookReadStatus (checkbox){
    if(checkbox.checked){
        return true;
    }
    else{
        return false;
    }
}

function displayBooks(myLibrary) {
    const bookShelf = document.querySelector('#book-shelf');
    const bookCard = document.createElement('div');
    const title = document.createElement('h1');
    const author = document.createElement('h2');
    const pages = document.createElement('h5');
     

    myLibrary.forEach(book => {
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        });
    
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);

    bookShelf.appendChild(bookCard);


}





document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    const readStatus = getBookReadStatus(document.querySelector('#book-read-status'));
    
    addBookToLibrary(title,author,pages,readStatus);
        
});


 