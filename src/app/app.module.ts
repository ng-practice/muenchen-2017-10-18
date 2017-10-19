import { AppRoutingModule } from './app-routing.module';
import { BookModule } from './book/book.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PlaygroundModule } from './playground/playground.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    PlaygroundModule,
    BookModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
