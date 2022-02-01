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
        books.forEach((book) => UI.addBookToList());

    }   
    static addBookToList(book) {
        const List = document.querySelector('#book-List');

        
    }        
}

//Store Class: Handles storage

//Event: Display Books

//Event: Add a Book

//Event: Remove a Book