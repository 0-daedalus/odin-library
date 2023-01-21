'use strict'
let myLibrary = [];
let newCard = document.querySelector(".button-container.card");
let container = document.querySelector(".container");

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
    let curr = document.querySelectorAll(".book");
    curr.forEach(book => {
        book.remove();
    })
    myLibrary.slice().reverse().forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.setAttribute("class", "card");
        bookCard.classList.add("book");
        if(book.isFinished){
            bookCard.classList.add("Nemz38");
        }
        else bookCard.classList.add("Kez");
        let title = document.createElement("p");
        title.classList.add("title");
        title.innerText = book.title;
        bookCard.appendChild(title);
        let div = document.createElement("div");
        div.classList.add("book-info");
        let bookInfo = `by ${book.author} \n ${book.pages} pages \n ${book.isFinished ? "Finished" : "Not finished"}`;
        div.innerText += bookInfo;
        let footer = document.createElement("div");
        footer.classList.add("card-footer");
        let infoButton = document.createElement("a");
        let infoImg = document.createElement("img");
        infoImg.classList.add("action", "show");
        infoImg.setAttribute("alt", "Show Book info");
        infoImg.setAttribute("src", "./images/book-open-variant.svg");
        infoButton.appendChild(infoImg);
        infoButton.addEventListener("click", function(e){
            e.stopPropagation();
            showBookInfo(this, book);
        });
        let deleteButton = document.createElement("a");
        let deleteImg = document.createElement("img");
        deleteImg.classList.add("action", "delete");
        deleteImg.setAttribute("alt", "Delete the book");
        deleteImg.setAttribute("src", "./images/close-thick.svg");
        deleteButton.appendChild(deleteImg);
        deleteButton.addEventListener("click", function(e){
            e.stopPropagation();
            deleteBook(book);
        });
        footer.appendChild(infoButton);
        footer.appendChild(deleteButton);
        bookCard.appendChild(div);
        bookCard.appendChild(footer);
        bookCard.addEventListener("click", function(){
            showBookInfo(this, book);
        });
        let content = document.querySelector(".content");
        content.insertBefore(bookCard, newCard);
    });
}

function displayForm(form) {
    // Get the current body element
    let body = document.querySelector("body");
    // Create a new div element with a class of "overlay"
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    container.classList.toggle("blurred");
    let bg = document.createElement("div");
    bg.classList.add("form-bg");
    // Add the form to the overlay div
    overlay.appendChild(form);
    form.appendChild(bg);
    // Add the overlay div to the body
    body.appendChild(overlay);
    overlay.addEventListener("click", (e) => {
        if(e.target === overlay){
            container.classList.toggle("blurred");
            overlay.parentNode.removeChild(overlay);
        }
    });
}

newCard.addEventListener("click", () => {
    let form = document.createElement("form");
    form.classList.add("form");
    form.classList.add("add-form");
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "title");
    nameLabel.innerText = "Name of the book:";
    nameLabel.classList.add("label");
    let nameInp = document.createElement("input");
    nameInp.setAttribute("type", "text");
    nameInp.setAttribute("id", "title");
    nameInp.required = true;
    nameInp.classList.add("nameinput");
    let authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author_name");
    authorLabel.innerText = "Author:";
    authorLabel.classList.add("label");
    let authorInp = document.createElement("input");
    authorInp.setAttribute("type", "text");
    authorInp.setAttribute("id", "author_name");
    authorInp.required = true;
    authorInp.classList.add("authorinput");
    let pagesLabel = document.createElement("label");
    pagesLabel.setAttribute("for", "pages");
    pagesLabel.innerText = "Number of pages:";
    pagesLabel.classList.add("label");
    let pagesInp = document.createElement("input");
    pagesInp.setAttribute("type", "number");
    pagesInp.setAttribute("id", "pages");
    pagesInp.setAttribute("min", "1");
    pagesInp.setAttribute("max", "9999");
    pagesInp.required = true;
    pagesInp.classList.add("pagesinput");
    let submit = document.createElement("button");
    submit.setAttribute("type", "button");
    submit.addEventListener("click", function(){
        submitBook();
    })
    submit.classList.add("btn-submit");
    submit.innerText = "Submit";
    let finished = document.createElement("label");
    finished.setAttribute("for", "isFinished")
    finished.innerText = "Have you finished it?";
    let rad = document.createElement("div");
    rad.classList.add("rad");
    let yesLabel = document.createElement("label");
    yesLabel.setAttribute("for", "yes");
    yesLabel.innerText = "Yes";
    let yes = document.createElement("input");
    yes.setAttribute("type", "radio");
    yes.setAttribute("name", "isFinished");
    yes.setAttribute("value", "true");
    yes.required = true;
    yes.setAttribute("id", "yes");
    let noLabel = document.createElement("label");
    noLabel.setAttribute("for", "no");
    noLabel.innerText = "No";
    let nah = document.createElement("input");
    nah.setAttribute("type", "radio");
    nah.setAttribute("name", "isFinished");
    nah.setAttribute("value", "false");
    nah.setAttribute("id", "no");
    let div1 = document.createElement("div");
    div1.classList.add("radio");
    let div2 = document.createElement("div");
    div2.classList.add("radio");
    div1.appendChild(yes);
    div1.appendChild(yesLabel);
    div2.appendChild(nah);
    div2.appendChild(noLabel);
    rad.appendChild(div1);
    rad.appendChild(div2);
    form.appendChild(nameLabel);
    form.appendChild(nameInp);
    form.appendChild(authorLabel);
    form.appendChild(authorInp);
    form.appendChild(pagesLabel);
    form.appendChild(pagesInp);
    form.appendChild(rad);
    form.appendChild(submit);
    displayForm(form);
});

function submitBook(){
    let titleData = document.getElementById("title").value;
    let authorData = document.getElementById("author_name").value;
    let pagesData = document.getElementById("pages").value;
    let isFinished;
    if(document.querySelector("input[type='radio']:checked").value === "true"){
        isFinished = true;
    }
    else isFinished = false;
    console.log(isFinished);
    let book = new Book(titleData, authorData, pagesData, isFinished);
    storeBook(book);
    let overlay = document.querySelector(".overlay");
    container.classList.toggle("blurred");
    overlay.parentNode.removeChild(overlay);
    displayBooks();
}

function updateBook(book){
    let isFinished = document.querySelector("input[type='checkbox']:checked");
    console.log(isFinished);
    if(isFinished){
        book.isFinished = true;
    }
    let overlay = document.querySelector(".overlay");
    container.classList.toggle("blurred");
    overlay.parentNode.removeChild(overlay);
    displayBooks();
}

function showBookInfo(card, book){
    console.log(book);
    let form = document.createElement("form");
    form.classList.add("form");
    let title = document.createElement("h1");
    title.innerText = book.title;
    title.classList.add("title");
    let info = document.createElement("div");
    info.classList.add("book-info");
    let author = document.createElement("p");
    let authorLabel = document.createElement("label");
    authorLabel.innerText = "Author of the book: ";
    author.innerText = book.author;
    let aDiv = document.createElement("div");
    let pages = document.createElement("p");
    let pagesLabel = document.createElement("label");
    pagesLabel.innerText = "Number of pages: ";
    pages.innerText = book.pages;
    let pDiv = document.createElement("div");
    let markLabel = document.createElement("label");
    markLabel.innerText = "Mark as read:"
    markLabel.setAttribute("for", "Nemz38");
    let choice = document.createElement("input");
    choice.setAttribute("type", "checkbox");
    choice.setAttribute("name", "Nemz38");
    choice.setAttribute("value", "true");
    choice.setAttribute("id", "Nemz38");
    let cDiv = document.createElement("div");
    cDiv.classList.add("radio");
    cDiv.setAttribute("for", "Nemz38");
    let submit = document.createElement("button");
    submit.setAttribute("type", "button");
    submit.addEventListener("click", function() {
        updateBook(book);
    });
    submit.classList.add("btn-submit");
    submit.innerText = "Submit";
    let sDiv = document.createElement("div");
    sDiv.classList.add("submit");
    aDiv.appendChild(authorLabel);
    aDiv.appendChild(author);
    pDiv.appendChild(pagesLabel);
    pDiv.appendChild(pages);
    cDiv.appendChild(markLabel);
    cDiv.appendChild(choice);
    sDiv.append(submit);
    info.appendChild(aDiv);
    info.appendChild(pDiv);
    info.appendChild(cDiv);
    info.appendChild(sDiv);
    form.appendChild(title);
    form.appendChild(info);
    displayForm(form);
}

function deleteBook(book){
    let index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    displayBooks();
}