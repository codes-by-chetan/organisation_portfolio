import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { OurServicesComponent } from "../our-services/our-services.component";
import { StatsComponent } from "../stats/stats.component";
import { DownloadProfileComponent } from "../download-profile/download-profile.component";

@Component({
  selector: 'app-homepage',
  imports: [HeroComponent, OurServicesComponent, StatsComponent, DownloadProfileComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
