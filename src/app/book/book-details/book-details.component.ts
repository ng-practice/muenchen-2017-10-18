import { Book } from '../../shared/book';
import { BookDataService } from '../../shared/book-data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book = {} as Book;

  constructor(private route: ActivatedRoute, private books: BookDataService) {}

  ngOnInit() {
    this.route.params
      .switchMap(params => this.books.getBookByISBN(params.isbn))
      .subscribe(book => this.book = book);
  }
}
