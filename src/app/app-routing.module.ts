import { BookListComponent } from './book/book-list/book-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'},
  { path: 'books', component: BookListComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
