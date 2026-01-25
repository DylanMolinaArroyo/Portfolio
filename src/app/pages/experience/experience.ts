import { Component } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

export interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  description: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CarouselModule, CommonModule, ButtonModule, TagModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences: ExperienceItem[] = [];
  responsiveOptions: any[] | undefined;

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

    this.responsiveOptions = [
      { breakpoint: '1280px', numVisible: 3, numScroll: 1 },
      { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
      { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    ];
  }
}
