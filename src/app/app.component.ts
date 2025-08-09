import { DatePipe, NgClass, CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, NgClass, FormsModule, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  myDate: Date;
  isDarkMode!: boolean;
  isEnglish = false;
  languageTransitioning = false;
  isMobileMenuOpen = false;

  // Typing effect properties
  displayedDescription = '';
  isTypingComplete = false;

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

    // Start typing effect after a short delay
    setTimeout(() => {
      this.startTypingEffect();
    }, 500);
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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  startTypingEffect() {
    const parts = ['React,', 'Next.js,', 'Angular,', 'Web Design.'];
    let currentPartIndex = 0;
    let currentCharIndex = 0;
    let currentText = '';

    const typeChar = () => {
      if (currentPartIndex < parts.length) {
        const currentPart = parts[currentPartIndex];

        if (currentCharIndex < currentPart.length) {
          // Type character by character
          currentText += currentPart[currentCharIndex];
          this.displayedDescription = currentText;
          currentCharIndex++;

          // 80ms delay between characters
          setTimeout(typeChar, 80);
        } else {
          // Finished current word, move to next
          currentPartIndex++;
          currentCharIndex = 0;

          if (currentPartIndex < parts.length) {
            // Add space before next word and pause longer between words
            currentText += ' ';
            this.displayedDescription = currentText;
            setTimeout(typeChar, 300); // 300ms pause between words
          } else {
            // Typing complete, but keep cursor blinking
            this.isTypingComplete = false; // Keep cursor visible and blinking
          }
        }
      }
    };

    typeChar();
  } translate(key: string): string {
    return this.translationService.translate(key);
  }
}
