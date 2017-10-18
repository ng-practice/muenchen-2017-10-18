import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfoBoxComponent, MouseCursorComponent, TitleBoxComponent],
  exports: [InfoBoxComponent, MouseCursorComponent, TitleBoxComponent]
})
export class PlaygroundModule { }
