//Book Class : Represents a Book
class Book{
    constructor(title, author, isbn) {
        this.title = title; 
        this.author = author;
        this.isbn = isbn;
 }
}
// UI Class:  Handle UI Tasks
class UI {
    static displayBooks() {
        const books = store.getBooks();
        books.forEach((book) => UI.addBookToList(book));

    }   
    static addBookToList(book) {
        const List = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm 
        delete">x</a></td>
        `;
        
        List.appendChild(row);
    }        

    static deletebook(el){
        if(el.classList.contains('delete')){
         el.parentElement.parentElement.remove();   
        }
    }

    static showAlert(message, className) {
      const div = document.createElement('div'); 
      div.className = `alert  ${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form');
      container.insertBefore(div, form);  
      //Vanish in 3 secondes
       setTimeout(()=> document.querySelector('.alert').remove(),
       3000);

    }
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//Store Class: Handles storage
class store{
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
            
        }
        return books;
    }
    static addBook(book) {
        const books = store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
      const books = store.getBooks();
      books.forEach((books, index) => {
          if(books.isbn === isbn){
              books.splice(index, 1);
         }
      });
      localStorage.setItem('books', JSON.stringify(books));

    }
}


//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    

   e.preventDefault();

    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    //Validate
    if (title === '' || author=== '' || isbn === '') {
        UI.showAlert('Please fill in all fields', 'alert-danger');
    }
    else {
        
    //instatiate book
    const book = new Book(title, author, isbn);

    // Add book to UI
    UI.addBookToList(book);

    //Add book to store
    store.addBook(book);

    //Show Success Message
    UI.showAlert('Book successfully Added', 'alert-success');
 
 // clear field
 UI.clearFields();

    }

 
});
//Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e)=>{
    //Remove Book from UI
    UI.deletebook(e.target);
    //Rmove Book from store
    store.removeBook
    (e.target.parentElement.previousElementSibling.textContent);

    //Show Success Message
    UI.showAlert('Book Removed', 'alert-warning');

})