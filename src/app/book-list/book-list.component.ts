import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Book } from '../shared/book.model';
import { BookShoppingListService } from './bookshopping-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls:['./book-list.component.css']
})

export class BookListComponent implements OnInit, OnDestroy 
{
  Books: Book[]=[];
  private subscription: Subscription = new Subscription;

  constructor(private slService: BookShoppingListService) { }

 
  ngOnInit() 
  {
    this.Books = this.slService.getBooks();
    this.subscription = this.slService.BooksChanged
      .subscribe(
        (Books: Book[]) => 
        {
          this.Books = Books;
        }
      );
  }

  
  ngOnDestroy() 
  {
    this.subscription.unsubscribe();
  }

  
  onEditItem(index: number) 
  {
    
    this.slService.startedEditing.next(index);
  }
}
