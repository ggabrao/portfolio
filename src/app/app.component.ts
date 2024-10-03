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
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.renderer.addClass(document.documentElement, 'dark');
      this.isDarkMode = true;
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
      this.isDarkMode = false;
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
    this.translationService.setLanguage(this.isEnglish ? 'en' : 'pt');
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
