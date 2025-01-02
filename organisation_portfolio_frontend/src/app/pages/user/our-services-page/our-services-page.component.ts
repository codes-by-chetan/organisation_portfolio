import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services-page',
  imports: [CommonModule],
  templateUrl: './our-services-page.component.html',
  styleUrl: './our-services-page.component.scss'
})
export class OurServicesPageComponent {
  services = [
    { name: 'CMM Measurement', description: 'Using Carl Zeiss make CMM machines (02 nos)' },
    { name: 'CMM Programming Support', description: 'Expert support for CMM programming' },
    { name: 'CMM Training', description: 'Comprehensive training for CMM operations' },
    { name: 'CMM Measurement Fixtures', description: 'Custom fixtures for CMM measurements' },
    { name: 'Complete Project Execution', description: 'For CMM measurement including programming, fixturing, styles combination etc.' },
    { name: 'Contour Measurement', description: 'Using Zeiss make machine' },
    { name: 'Surface Roughness Measurement', description: 'Using Zeiss make machine' },
    { name: 'Optical Measurement', description: 'Using Optical measurement machine' },
    { name: '3D Measurement', description: 'Using Zeiss make machine' },
    { name: 'Reverse Engineering', description: 'Advanced reverse engineering services' },
    { name: '3rd Party Inspection Support', description: 'At supplier / customer end for PPAP Lot / PDIR verification' }
  ];

}
