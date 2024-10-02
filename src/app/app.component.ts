import { DatePipe, NgClass } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, NgClass, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  myDate: Date;
  isDarkMode = false;
  isEnglish = false;

  constructor(private translationService: TranslationService, private renderer: Renderer2) {
    this.myDate = new Date();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
    this.translationService.setLanguage(this.isEnglish ? 'en' : 'pt');
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
