import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component'
@Component({
  selector: 'app-user-layout',
  imports: [ RouterOutlet,NavbarComponent, FooterComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss'
})
export class UserLayoutComponent {

  @Output() theme = new EventEmitter();

}
