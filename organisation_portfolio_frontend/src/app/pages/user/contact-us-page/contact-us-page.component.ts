import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
@Component({
  selector: 'app-contact-us-page',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.scss',
})
export class ContactUsPageComponent {
  contactForm!: FormGroup;

  contactInfo = {
    address:
      'c/o AN Engineering, Shop no.01, BGP 10-13, Near Hotel Fern, MIDC, Bhosari, Pune-411026',
    phone: ['+91-9689362230', '9021252620', '7057658316', '8767589201 (Lab)'],
    email: ['galaxki.engineering@yahoo.com', 'galaxki.cmmlab@gmail.com'],
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('^[0-9]{10}$')],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Here you would typically send the form data to your backend
      // For now, we'll just log it to the console
      alert(
        'Thank you for your message. Our team will get in touch with you soon!'
      );
      this.contactForm.reset();
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
