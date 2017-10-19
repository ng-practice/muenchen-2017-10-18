import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'},
  { path: 'books', loadChildren: './book/book.module#BookModule' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
