import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Book } from '../../shared/book.model';
import { BookShoppingListService } from '../bookshopping-list.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls:['./book-edit.component.css']

})

export class BookEditComponent implements OnInit, OnDestroy 
{
 
  @ViewChild('f')
  slForm!:NgForm;
  subscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Book;

  
  constructor(private slService: BookShoppingListService) 
  { }

  
  ngOnInit() 
  {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getBook(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  
  ngOnDestroy() 
  {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) 
  {
    const value = form.value;
   
    const newBook = new Book(value.name, value.amount);
    
    if (this.editMode) 
    {
      
      this.slService.updateBook(this.editedItemIndex, newBook);
    } 
    else 
    {
     
      this.slService.addBook(newBook);
    }
    this.editMode = false;
    form.reset();
  }

  
  onClear() 
  {
    this.slForm.reset();
    this.editMode = false;
  }

  
  onDelete() 
  {
    this.slService.deleteBook(this.editedItemIndex);
    this.onClear();
  }
}
