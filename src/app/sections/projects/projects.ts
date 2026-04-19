import { Component, OnInit } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { TranslatePipe } from '@ngx-translate/core';

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
  imports: [ScrollAnimateDirective, CarouselComponent, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  projects: Project[] = [];

  ngOnInit() {
    this.projects = [
      {
        title: 'Game Hub',
        description: 'PROJECTS.GAME_HUB.DESCRIPTION',
        image: 'assets/projects/game-hub.jpg',
        link: '#',
        code: 'https://github.com/DylanMolinaArroyo/Game_Hub',
        tags: ['TypeScript', 'React', 'Vite', 'Firebase'],
        status: 'Completed',
      },
      {
        title: 'Tecno Tanks',
        description: 'PROJECTS.TECNO_TANKS.DESCRIPTION',
        image: 'assets/projects/tecno-tanks.jpg',
        link: '#',
        code: 'https://github.com/DylanMolinaArroyo/Tecno_Tanks',
        tags: ['Python', 'Pygame', 'Multithreading'],
        status: 'Completed',
      },
      {
        title: 'Database Schema Visualizer',
        description: 'PROJECTS.DB_VISUALIZER.DESCRIPTION',
        image: 'assets/projects/db-visualizer.jpg',
        link: '#',
        code: 'https://github.com/DylanMolinaArroyo/Database_Schema_Visualizer',
        tags: ['SQL', 'Web'],
        status: 'Completed',
      },
      {
        title: 'Christmas Compiler',
        description: 'PROJECTS.CHRISTMAS_COMPILER.DESCRIPTION',
        image: 'assets/projects/christmas-compiler.jpg',
        link: '#',
        code: 'https://github.com/DylanMolinaArroyo/Christmas_Compiler',
        tags: ['Java', 'JFLEX', 'Java CUP'],
        status: 'Completed',
      },
      {
        title: 'Mini-SNS',
        description: 'PROJECTS.MINI_SNS.DESCRIPTION',
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
