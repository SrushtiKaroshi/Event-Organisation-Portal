import { Book } from '../shared/book.model';

export class Project 
{
  
  public name: string;
  public description: string;
  public imagePath: string;
  public Books: Book[];

  constructor(name: string, desc: string, imagePath: string, Books: Book[]) 
  {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.Books = Books;
  }
}
