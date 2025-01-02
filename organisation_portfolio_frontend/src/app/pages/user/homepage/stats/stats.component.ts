import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { InViewDirective } from '../../../../directives/in-view.directive';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-stats',
  imports: [CommonModule, InViewDirective, CountUpModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  statsInView = false;
  cdr = inject(ChangeDetectorRef);

  stats = [
    { value: 30, label: 'TEAM', icon: 'fas fa-users' },
    { value: 2011, label: 'SINCE', icon: 'fas fa-calendar-alt' },
    { value: 250, label: 'CLIENTS', icon: 'fas fa-briefcase' },
    { value: 10, label: 'APPLICATIONS', icon: 'fas fa-cogs' },
  ];
  countUpOptions = {
    duration: 3,
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
  };
  onStatsInView(inView: boolean) {
    if (inView && !this.statsInView) {
      console.log(inView, this.statsInView);

      this.statsInView = true;
      // Trigger countUp animation
      this.stats = [...this.stats];
      this.cdr.detectChanges();
    }
  }
}
