import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
