//let bookDetails = document.getElementById(" ")
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let bookRead = Boolean;
let library = document.getElementById("library");
let bookshelf = document.getElementById('bookshelf');
let newBookButton = document.getElementById('newBookButton');




let myLibrary = [{title: "The Power of Now", author: "Eckhart Tolle", pages: 300, read: true},  {title:"McMindfulness", author: "Ronold Purser", pages: 230, read: true}];

function  Book(){
    //constructor
}

function addBookToLibrary(){

}


function displayBooks(myLibrary){
    bookshelf.innerHTML = " "

    myLibrary.forEach(book => {
        let titleElement  = document.createElement("div");
        let authorElement = document.createElement("div");
        let pagesElement =  document.createElement("div");
        let bookReadElement =  document.createElement("div");

        titleElement.textContent = book.title;
        authorElement.textContent = book.author;
        pagesElement.textContent = book.pages;
        bookReadElement.textContent = book.read ? "Read" : "Not Read";

        let bookDetails = document.createElement('div');
        bookDetails.setAttribute('id', 'bookDetails')
        bookDetails.append(titleElement, authorElement, pagesElement, bookReadElement);

        bookshelf.append(bookDetails);


        console.log(book.title);
    });
}

window.onload = displayBooks(myLibrary);

function createForm(){
    //create form 
    let form = document.createElement("form");

    //create form elements
    let titleLabel = document.createElement('label');
    titleLabel.textContent = "Title";
    let titleInput = document.createElement("input")
    titleInput.type = "text";
    titleInput.name = "newTitle";

    let authorLabel = document.createElement('label');
    authorLabel.textContent = "Author";
    let authorInput = document.createElement("input")
    authorInput.type = "text";
    authorInput.name = "newAuthor";

    let pagesLabel = document.createElement('label');
    pagesLabel.textContent = "Pages";
    let pagesInput = document.createElement("input")
    pagesInput.type = "text";
    pagesInput.name = "newPages";

    //let bookRead = document.querySelector('#read')
    //bookRead.textContent = "Have you read this?";

    //append form elements to form
    form.appendChild(titleLabel)
    form.appendChild(titleInput)
    form.appendChild(authorLabel)
    form.appendChild(authorInput)
    form.appendChild(pagesLabel)
    form.appendChild(pagesInput)

    //ADD BOOK READ INFO

    //append form to library container 
    library.appendChild(form)
}


newBookButton.addEventListener('click', createForm);


function Books(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = Boolean
    this.info = function(){
        if (this.read === true) {
        console.log(title + "written by" + author + "," + pages + "has been read" )}
        else {
            console.log(title + "written by" + author + "," + pages + "has not been read" )
        }
}
}


