import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  greeting = 'Hallo Leipzig!';

  color = 'red';

  showMessage(message: string) {
    window.confirm(message);
  }
}
