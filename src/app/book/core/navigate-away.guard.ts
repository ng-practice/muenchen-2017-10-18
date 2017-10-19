import { BookDetailsComponent } from '../book-details/book-details.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class NavigateAway implements CanDeactivate<BookDetailsComponent> {
  canDeactivate(
    component: BookDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot): boolean {
    return window.confirm('Are you sure that you want to leave?');
  }
}
