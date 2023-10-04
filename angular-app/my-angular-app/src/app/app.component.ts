import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  currentView: string = 'aboutMe'; // Initialize with 'resume' or 'aboutMe'

  showAboutMe() {
    this.currentView = 'aboutMe';
  }

  showResume() {
    this.currentView = 'resume';
  }
}