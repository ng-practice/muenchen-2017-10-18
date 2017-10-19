import { BookDataService } from './../../shared/book-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Array<any>;

  constructor(private booksService: BookDataService) { }

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }
}
