import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement, Provider } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs/observable/of';

import { BookDataService } from '../../shared/book-data.service';

import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  describe('When the list of books is goiing to be initialized', () => {
    let bookList: BookListComponent;
    let service: jasmine.SpyObj<BookDataService>;

    beforeEach(() => {
      // Service Mock
      service = jasmine.createSpyObj('book-data-service', ['getBooks']);
      service.getBooks.and.returnValue(of([{ title: 'The Willpower Instinct' }]));

      bookList = new BookListComponent(service);
    });

    // fakeAsync -> @angular/core/testing
    it('all books are loaded', fakeAsync(() => {
      // execute async call
      bookList.ngOnInit();

      // resolve all async operations
      tick();

      expect(bookList.books.length).toBe(1);
    }));
  });

  describe('When a detail link is clicked', () => {
    let fixture: ComponentFixture<BookListComponent>;
    let bookList: BookListComponent;
    // a tag we want to click to navigate to details view
    let detailsLink: DebugElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          BookListComponent,
          BookDetailsComponent
        ],
        imports: [
          RouterTestingModule.withRoutes([
            { path: 'books/:isbn', component: BookDetailsComponent }
          ])
        ],
        providers: [{
          provide: BookDataService,
          useFactory() {
            return {
              getBooks: () => of([{ isbn: '1-2-3' }]),
              getBookByISBN: (isbn: string) => of({})
            };
          }
        }]
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(BookListComponent);
      bookList = fixture.componentInstance;

      bookList.ngOnInit();

      // Bind loaded books to html template
      fixture.detectChanges();
    });

    it('should navigate to book details', fakeAsync(() => {
      // query first detail link in the template
      detailsLink = fixture.debugElement.query(By.css('[href]'));
      (detailsLink.nativeElement as HTMLAnchorElement).click();

      tick();

      // check if navigation result is /books/1-2-3 <- Where do we get this Location
      // Location -> @angular/common
      expect(TestBed.get(Location).path()).toBe('/books/1-2-3');
    }));
  });
});
