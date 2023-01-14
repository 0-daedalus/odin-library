let myLibrary = [];
let newCard = document.querySelector(".button-container.card");

function Book(title, author, pages, isFinished){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isFinished = isFinished;
}

function storeBook(book){
    myLibrary.push(book);
}

function displayBooks(){
    myLibrary.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.setAttribute("class", "card");
        let content = document.querySelector(".content");
        content.insertBefore(bookCard, newCard);
    });
}