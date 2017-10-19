import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'},
  { path: 'books', component: BookListComponent },
  { path: 'books/:isbn', component: BookDetailsComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
