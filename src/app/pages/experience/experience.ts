import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DEFAULT_CAROUSEL_OPTIONS, ResponsiveOption } from '../../shared/carousel.config';

export interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  description: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit {
  experiences: ExperienceItem[] = [];
  responsiveOptions: ResponsiveOption[] = DEFAULT_CAROUSEL_OPTIONS;

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
  }
}
