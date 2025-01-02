import { Routes } from '@angular/router';
import { UserLayoutComponent } from './pages/user/user-layout/main/user-layout.component';
import { HomepageComponent } from './pages/user/homepage/main/homepage.component';
import { OurServicesPageComponent } from './pages/user/our-services-page/our-services-page.component';
import { AboutUsPageComponent } from './pages/user/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './pages/user/contact-us-page/contact-us-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
    },
    {
        path: 'services',
        component: OurServicesPageComponent
    },
    {
        path: 'about',
        component: AboutUsPageComponent
    },
    {
        path: 'contact',
        component: ContactUsPageComponent
    }
];
