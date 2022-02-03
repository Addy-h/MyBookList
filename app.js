//Book Class : Represents a Book
class Book{
    constructor(title, author, isbn) {
        this.title = title; 
        this.author = author;
        this.isbn = isbn;
 }
}
// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book one',
                author: 'Addy Queen',
                isbn: '12345',
            },
            {
                title: 'Book one',
                author: 'Yusuf M',
                isbn: '10231',
            }
        ];   
        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));

    }   
    static addBookToList(book) {
        const List = document.querySelector('#book-List');

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
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//Store Class: Handles storage

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) 
=>{
    //prevent actual submit

   e.preventDefault();

    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //instatiate book
    const book = new Book(title, author, isbn);
   // Add book to UI
   UI.addBookToList(book);

// clear field
UI.clearFields();
 
});
//Event: Remove a Book
document.querySelector('#book-List').addEventListener('click', (e)
=>{
    UI.deleteBook(e.target)

})