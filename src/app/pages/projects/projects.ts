import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { DEFAULT_CAROUSEL_OPTIONS, ResponsiveOption } from '../../shared/carousel.config';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  code: string;
  tags: string[];
  status: 'Completed' | 'In Progress' | 'Beta';
}

@Component({
  selector: 'app-projects',
  imports: [CarouselModule, TagModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  projects: Project[] = [];
  responsiveOptions: ResponsiveOption[] = DEFAULT_CAROUSEL_OPTIONS;

  ngOnInit() {
    this.projects = [
      {
        title: 'Game_Hub',
        description:
          'React application to explore video game data and practice core React concepts.',
        image: 'assets/projects/nn-visualizer.jpg',
        link: 'https://demo.com',
        code: 'https://github.com/DylanMolinaArroyo/Game_Hub.git',
        tags: ['TypeScript', 'React', 'Vite'],
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
