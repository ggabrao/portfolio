import { DatePipe, NgClass } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, NgClass, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  myDate: Date;
  isDarkMode!: boolean;
  isEnglish = false;

  constructor(private translationService: TranslationService, private renderer: Renderer2) {
    this.myDate = new Date();
  }

  ngOnInit(): void {
    //check user's theme
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.renderer.addClass(document.documentElement, 'dark');
      this.isDarkMode = true;
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
      this.isDarkMode = false;
    }

    //check user's language
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      if (!savedLanguage.startsWith('pt')) {
        this.isEnglish = true;
        this.translationService.setLanguage('en');
      } else {
        this.isEnglish = false;
        this.translationService.setLanguage('pt');
      }
    } else {
      // Check browser's language if no preference is saved
      const browserLanguage = navigator.language;
      if (!browserLanguage.startsWith('pt')) {
        this.isEnglish = true;
        this.translationService.setLanguage('en');
      } else {
        this.isEnglish = false;
        this.translationService.setLanguage('pt');
      }
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
      localStorage['theme'] = 'dark';
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
      localStorage['theme'] = 'light';
    }
  }

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
    const newLanguage = this.isEnglish ? 'en' : 'pt';
    this.translationService.setLanguage(newLanguage);
    localStorage['language'] = newLanguage;
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
