import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent {
  services = [
    { name: 'CMM measurement', icon: 'fas fa-arrows-alt', color: 'pink' },
    { name: 'Reverse engineering', icon: 'fas fa-undo', color: 'blue' },
    {
      name: 'Contour measurement',
      icon: 'fas fa-ruler',
      color: 'pink',
    },
    {
      name: 'Surface Roughness measurement',
      icon: 'fas fa-object-ungroup',
      color: 'blue',
    },
    { name: '3D Measurement', icon: 'fas fa-cube', color: 'pink' },
    { name: 'Optical measurement', icon: 'fas fa-microscope', color: 'blue' },

    { name: 'Inspection Support', icon: 'fas fa-search', color: 'pink' },
  ];
}
