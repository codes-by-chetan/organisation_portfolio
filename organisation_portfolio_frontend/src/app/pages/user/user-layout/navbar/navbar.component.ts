import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('200ms ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class NavbarComponent {
  isMenuOpen = false;
  isDarkMode = false;

  ngOnInit() {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      this.isDarkMode = true;
      document.querySelector('html')?.classList.add('dark');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    const body = document.querySelector('html');
    if (this.isDarkMode) {
      body?.classList.add('dark');
    } else {
      body?.classList.remove('dark');
    }
  }
}
