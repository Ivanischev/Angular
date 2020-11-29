import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public webApp = 'Angular';

  changeAppTitle(event) {
    this.webApp = this.webApp === 'Angular' ? 'React' : 'Angular';
  }
}
