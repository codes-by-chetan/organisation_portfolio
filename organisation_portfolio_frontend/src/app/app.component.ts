import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { CountUpModule } from 'ngx-countup';
import { InViewDirective } from './directives/in-view.directive';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './pages/user/user-layout/main/user-layout.component';
@Component({
  selector: 'app-root',
  imports: [UserLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'organisation_portfolio_frontend';
  sellerMode = false;
  customerMode = true;
  currentRoute: any;
  routerSubscription: any;
  router = inject(Router);
  private checkRoute() {
    this.currentRoute = this.router.url;
    console.log(this.currentRoute);
    if (this.currentRoute.includes('seller')) {
      this.sellerMode = true;
      this.customerMode = false;
    } else {
      this.sellerMode = false;
      this.customerMode = true;
    }
  }

  

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
