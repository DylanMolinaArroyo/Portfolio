import { Component } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  code: string;
  tags: string[];
  status: 'Completed' | 'In Progress' | 'Beta';
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  projects: Project[] = [];
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.projects = [
      {
        title: 'Neural Network Visualizer',
        description:
          'Herramienta interactiva para visualizar pesos y sesgos en tiempo real usando TensorFlow.js.',
        image: 'assets/projects/nn-visualizer.jpg', // Cambia por tus rutas reales
        link: 'https://demo.com',
        code: 'https://github.com',
        tags: ['TypeScript', 'Canvas', 'AI'],
        status: 'Completed',
      },
      {
        title: 'Cloud Monitor Dashboard',
        description: 'Panel de control para métricas de AWS con alertas automáticas vía Telegram.',
        image: 'assets/projects/dashboard.jpg',
        link: 'https://demo.com',
        code: 'https://github.com',
        tags: ['Angular', 'AWS', 'Node.js'],
        status: 'Beta',
      },
      {
        title: 'Cybersecurity Scanner',
        description: 'Script automatizado para detección de vulnerabilidades OWASP Top 10.',
        image: 'assets/projects/scanner.jpg',
        link: 'https://demo.com',
        code: 'https://github.com',
        tags: ['Python', 'Docker'],
        status: 'Completed',
      },
    ];

    this.responsiveOptions = [
      { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
      { breakpoint: '991px', numVisible: 2, numScroll: 1 },
      { breakpoint: '767px', numVisible: 1, numScroll: 1 },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'warn';
      case 'Beta':
        return 'info';
      default:
        return 'secondary';
    }
  }
}
