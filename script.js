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
        let title = document.createElement("p");
        title.innerText = book.title;
        bookCard.appendChild(title);
        let div = document.createElement("div");
        div.classList.add("book-info");
        let bookInfo = `by ${book.author} \n ${book.pages} pages`;
        div.innerText += bookInfo;
        bookCard.appendChild(div);
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
    // Add the form to the overlay div
    overlay.appendChild(form);
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
    nameInp.classList.add("nameinput");
    let authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author_name");
    authorLabel.innerText = "Author:";
    authorLabel.classList.add("label");
    let authorInp = document.createElement("input");
    authorInp.setAttribute("type", "text");
    authorInp.setAttribute("id", "author_name");
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
    pagesInp.classList.add("pagesinput");
    let submit = document.createElement("button");
    submit.setAttribute("type", "button");
    submit.setAttribute("onclick", "submitBook()");
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
    yes.setAttribute("value", "yes");
    yes.setAttribute("id", "yes");
    let noLabel = document.createElement("label");
    noLabel.setAttribute("for", "no");
    noLabel.innerText = "No";
    let nah = document.createElement("input");
    nah.setAttribute("type", "radio");
    nah.setAttribute("name", "isFinished");
    nah.setAttribute("value", "no");
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
    let isFinished = document.querySelector("input[type='radio']:checked").value;
    let book = new Book(titleData, authorData, pagesData, isFinished);
    storeBook(book);
    let overlay = document.querySelector(".overlay");
    container.classList.toggle("blurred");
    overlay.parentNode.removeChild(overlay);
    displayBooks();
}

