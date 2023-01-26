import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  title = 'Google Books APIs';
  books:any;
  bookSize: any;
  searchString:any = 'Melissa';
  

  constructor(private bookService:BookService) { }

  onClickImage(book:any){
    book.previewMode = !book.previewMode;    
  }
  
  private async getBooks() {

    this.books = await lastValueFrom(this.bookService.getBooks(this.searchString))
    this.bookSize = this.books.length;
    console.log(this.books);
    
  }

  onSubmit() {
    this.getBooks()
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
