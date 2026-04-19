import { Component, OnInit } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { TimelineComponent, TimelineItem } from '../../shared/timeline/timeline.component';

export interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  description: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  imports: [ScrollAnimateDirective, TimelineComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit {
  experiences: ExperienceItem[] = [];
  timelineItems: TimelineItem[] = [];

  ngOnInit() {
    this.experiences = [
      {
        role: 'Full Stack Developer',
        company: 'Creative Agency X',
        year: '2020 - 2022',
        description: [
          'Desarrollo de CMS personalizado para clientes enterprise.',
          'Integración de pasarelas de pago (Stripe/PayPal).',
        ],
        tags: ['React', 'TypeScript', 'GraphQL'],
      },
    ];
    this.timelineItems = this.experiences.map(e => ({
      title: e.role,
      subtitle: e.company,
      year: e.year,
      description: e.description,
      tags: e.tags,
    }));
  }
}
