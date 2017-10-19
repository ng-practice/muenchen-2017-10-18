import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BookDataService } from './../shared/book-data.service';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [BookListComponent],
  exports: [BookListComponent],
  providers: [BookDataService]
})
export class BookModule { }
