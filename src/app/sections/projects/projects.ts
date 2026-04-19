import { Component, OnInit } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { CarouselComponent } from '../../shared/carousel/carousel.component';

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
  imports: [ScrollAnimateDirective, CarouselComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  projects: Project[] = [];

  ngOnInit() {
    this.projects = [
      {
        title: 'Game Hub',
        description:
          'React application built with TypeScript, Vite, Firebase, and the RAWG API to explore video game data and practice core React concepts.',
        image: 'assets/projects/game-hub.jpg',
        link: '#',
        code: 'https://github.com/DylanMolinaArroyo/Game_Hub',
        tags: ['TypeScript', 'React', 'Vite', 'Firebase'],
        status: 'Completed',
      },
      {
        title: 'Tecno Tanks',
        description:
          'Modern Python/Pygame game inspired by Battle City (1990). Implements process management, thread synchronization, inter-thread communication, and real-time resource control in a client-server architecture.',
        image: 'assets/projects/tecno-tanks.jpg',
        link: '#',
        code: 'https://github.com/DylanMolinaArroyo/Tecno_Tanks',
        tags: ['Python', 'Pygame', 'Multithreading'],
        status: 'Completed',
      },
      {
        title: 'Database Schema Visualizer',
        description:
          'Web-based application to dynamically connect to different relational database engines and visualize their database schema.',
        image: 'assets/projects/db-visualizer.jpg',
        link: '#',
        code: 'https://github.com/DylanMolinaArroyo/Database_Schema_Visualizer',
        tags: ['SQL', 'Web'],
        status: 'Completed',
      },
      {
        title: 'Christmas Compiler',
        description:
          'Java-based academic compiler implementing lexical, syntactic, and semantic analysis using JFLEX and Java CUP, including symbol table management and semantic validation.',
        image: 'assets/projects/christmas-compiler.jpg',
        link: '#',
        code: 'https://github.com/DylanMolinaArroyo/Christmas_Compiler',
        tags: ['Java', 'JFLEX', 'Java CUP'],
        status: 'Completed',
      },
      {
        title: 'Mini-SNS',
        description:
          'Simple social networking service to practice full-stack development. Implements user authentication, post creation, friend management, comments, and likes.',
        image: 'assets/projects/mini-sns.jpg',
        link: '#',
        code: 'https://github.com/DylanMolinaArroyo/Mini-SNS',
        tags: ['Node.js', 'Express', 'MongoDB', 'EJS'],
        status: 'Completed',
      },
    ];
  }

  getWebpSrc(src: string): string {
    return src.replace(/.(jpg|jpeg|png)$/i, '.webp');
  }

  getSeverity(status: string): string {
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
