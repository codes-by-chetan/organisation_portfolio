import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  imports: [CommonModule],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss',
})
export class AboutUsPageComponent {
  companyInfo = {
    name: 'Galaxki Engineering',
    formation: 'Formed by industry experts with over 15 years of experience',
    vision:
      "To become world's most trusted service source for metrology inspection.",
    mission: 'On-time delivery with 100% customer support.',
    expertise: [
      'CMM measurement and programming',
      'Contour and surface roughness measurement',
      'Optical and 3D measurement',
      'Reverse engineering',
      '3rd party inspection support',
    ],
    address:
      'c/o AN Engineering, Shop no.01, BGP 10-13, Near Hotel Fern, MIDC, Bhosari, Pune-411026',
    contact: {
      phone: ['+91-9689362230', '9021252620', '7057658316', '8767589201 (Lab)'],
      email: ['galaxki.engineering@yahoo.com', 'galaxki.cmmlab@gmail.com'],
    },
  };
}
