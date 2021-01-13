import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public commonNumber: number = 21;

  public resetCounter(): void {
    this.commonNumber = 0;
  }
}
