import { Book } from '../shared/book.model';
import { Subject } from 'rxjs';


export class BookShoppingListService 
{
  BooksChanged = new Subject<Book[]>();
  startedEditing = new Subject<number>();

 
  private Books: Book[] = 
  [
    new Book('Practical Approach in C - Ajay Mittal', 580),
    new Book('Linux System Programming - Robert Love', 710),
    new Book('Windows Internals - Soloman', 1150),
    new Book('Programming Windows- Petzold', 980),
    new Book('Computer Architecture - V. Rajaraman', 410),
  ];

  
  getBooks() 
  {
    return this.Books.slice();
  }

  
  getBook(index: number) 
  {
    return this.Books[index];
  }

  
  addBook(Book: Book) 
  {
    this.Books.push(Book);
    this.BooksChanged.next(this.Books.slice());
  }

 
  addBooks(Books: Book[]) 
  {
    this.Books.push(...Books);
    this.BooksChanged.next(this.Books.slice());
  }

  
  updateBook(index: number, newBook: Book) 
  {
    this.Books[index] = newBook;
    this.BooksChanged.next(this.Books.slice());
  }

  
  deleteBook(index: number) 
  {
    this.Books.splice(index, 1);
    this.BooksChanged.next(this.Books.slice());
  }
}
