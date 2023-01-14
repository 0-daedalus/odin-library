let myLibrary = [];
let newCard = document.querySelector(".button-container.card");
let container = document.querySelector(".container");
let body = document.querySelector("body");

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

function shit(e){
    let form = document.querySelector(".form");
    if(e.target != form && e.target.parentNode != form){
        hideForm();
    }
}

function displayForm(){
    let form = document.createElement("form");
    container.classList.toggle("blurred"); console.log("Blurred toggle");
    form.setAttribute("class", "form");
    body.appendChild(form);
}

function hideForm(){
    let form = document.querySelector(".form");
    container.classList.toggle("blurred"); console.log("Blurred toggle");
    body.removeChild(form);
    console.log("Form deleted");
    document.removeEventListener("mouseup", shit);
}

newCard.addEventListener("click", () => {
    displayForm();
    document.addEventListener("mouseup", shit)
});

