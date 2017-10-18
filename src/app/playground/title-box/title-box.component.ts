import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent {
  @Input() title: string;
  @Output() titleClicked = new EventEmitter<string>();

  sendPing() {
    this.titleClicked.emit('Hello from TitleCompoenent');
  }
}
