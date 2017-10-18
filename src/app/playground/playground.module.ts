import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfoBoxComponent],
  exports: [InfoBoxComponent]
})
export class PlaygroundModule { }
