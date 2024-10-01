import { DatePipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, NgClass, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
  myDate: Date;
  isDarkMode = false;
  isEnglish: boolean = false;

  constructor() {
    this.myDate = new Date();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
