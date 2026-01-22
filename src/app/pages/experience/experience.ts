import { Component } from '@angular/core';

export interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  description: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences: ExperienceItem[] = [];

  ngOnInit() {
    this.experiences = [
      {
        role: 'Systems Architect',
        company: 'Global Cloud Services',
        year: '2022 - Hoy',
        description: [
          'Diseño de infraestructura escalable para procesamiento de Big Data.',
          'Reducción de costos de nube en un 25% mediante Serverless.',
        ],
        tags: ['Azure', 'Terraform', 'C#'],
      },
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
