import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksRoutingModule } from './book-routing.module';

import { BookDataService } from './../shared/book-data.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    BooksRoutingModule
  ],
  declarations: [BookListComponent, BookDetailsComponent, BookComponent],
  exports: [BookListComponent],
  providers: [BookDataService]
})
export class BookModule { }
