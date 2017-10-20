//#region
import { TestBed, fakeAsync, inject } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { BookDataService } from './book-data.service';

import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
//#endregion

describe('BookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookDataService]
    });
  });

  describe('When the API can be accessed', () => {
    it('should provide books',
      inject([BookDataService, HttpTestingController],
        fakeAsync((service: BookDataService, httpMock: HttpTestingController) => {
          // make the api call like you would do inside you component
          service
            .getBooks()
            .subscribe(books => expect(books).toBeDefined());

          const request = httpMock.expectOne('http://localhost:4730/books');

          request.flush([{ title: 'Mein Gespräche mit Gott' }]);
        })));
  });

  describe('When the API throws an error', () => {
    it('should provide the error message "Sorry, books could not be loaded."',
      inject([BookDataService, HttpTestingController],
        fakeAsync((service: BookDataService, httpMock: HttpTestingController) => {

          service
            .getBooks()
            .subscribe(
              () => {},
              err => expect(err.message).toBe('Sorry, books could not be loaded.')
            );

          const request = httpMock.expectOne('http://localhost:4730/books');

          request.error(new ErrorEvent('not found'), {
            statusText: 'Sorry, books could not be loaded.'
          });
    })));
  });
});
