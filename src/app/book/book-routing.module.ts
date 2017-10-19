import { NavigateAway } from './core/navigate-away.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      { path: '', component: BookListComponent },
      {
        path: ':isbn',
        component: BookDetailsComponent,
        canDeactivate: [NavigateAway]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [NavigateAway]
})
export class BooksRoutingModule { }
