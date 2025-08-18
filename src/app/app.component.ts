import { DatePipe, NgOptimizedImage, NgIf, NgFor } from '@angular/common';
import { Component, OnInit, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, NgIf, NgFor, NgOptimizedImage],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  myDate: Date;
  isDarkMode!: boolean;
  isMobileMenuOpen = false;

  // Typing effect properties
  displayedDescription = '';
  isTypingComplete = false;

  // Animation observer
  private observer!: IntersectionObserver;

  // Projects data
  projects: Project[] = [
    {
      title: 'Next.js Handbook',
      description: 'Designed to assist beginners in Next.js by sharing my personal knowledge and insights into key concepts of the framework.',
      githubUrl: 'https://github.com/ggabrao/nextjs-handbook',
      liveUrl: 'https://nextjs-handbook-eight.vercel.app/',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript']
    },
    {
      title: 'Career Tracker',
      description: 'Next.js app built entirely with an AI pair programmer tool, under my guidance. All within the Vercel ecosystem.',
      githubUrl: 'https://github.com/ggabrao/career-tracker-v0',
      liveUrl: 'https://career-tracker-v0.vercel.app',
      technologies: ['v0', 'Next.js', 'React', 'Tailwind CSS', 'TypeScript']
    },
    {
      title: 'Final Paper',
      description: 'Demonstration of the key concepts of the Angular framework, through practical examples and explanations.',
      githubUrl: 'https://github.com/ggabrao/final-paper',
      liveUrl: 'https://finalpaper.netlify.app/',
      technologies: ['Angular', 'TypeScript', 'HTML/CSS']
    }
  ];

  constructor(
    private renderer: Renderer2,
  ) {
    this.myDate = new Date();
  }

  // Get badge color based on technology type
  getTechBadgeClass(tech: string): string {
    const techColors: { [key: string]: string } = {
      'Angular': 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 ring-red-700/10 dark:ring-red-300/10',
      'React': 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 ring-blue-700/10 dark:ring-blue-300/10',
      'v0': 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 ring-yellow-700/10 dark:ring-yellow-300/10',
      'Tailwind CSS': 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 ring-teal-700/10 dark:ring-teal-300/10',
      'TypeScript': 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 ring-orange-700/10 dark:ring-orange-300/10',
      'Next.js': 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 ring-purple-700/10 dark:ring-purple-300/10',
      'HTML/CSS': 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 ring-pink-700/10 dark:ring-pink-300/10',
    };

    return techColors[tech] || 'bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300 ring-gray-700/10 dark:ring-gray-300/10';
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

    // Start typing effect after a short delay
    setTimeout(() => {
      this.startTypingEffect();
    }, 500);
  }

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupScrollAnimations(): void {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('animate-in');

          // Animate child elements with stagger
          const children = element.querySelectorAll('.animate-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * 150); // 150ms stagger delay
          });
        }
      });
    }, options);

    // Observe sections
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
      this.observer.observe(section);
    });
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
  }
}
