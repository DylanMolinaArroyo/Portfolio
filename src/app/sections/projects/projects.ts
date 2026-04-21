import { Component, OnInit } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { TranslatePipe } from '@ngx-translate/core';

export interface Project {
  title: string;
  description: string;
  code: string;
  tags: string[];
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
        code: 'https://github.com/DylanMolinaArroyo/Game_Hub',
        tags: ['TypeScript', 'React', 'Vite', 'Firebase'],
      },
      {
        title: 'Tecno Tanks',
        description: 'PROJECTS.TECNO_TANKS.DESCRIPTION',
        code: 'https://github.com/DylanMolinaArroyo/Tecno_Tanks',
        tags: ['Python', 'Pygame', 'Multithreading'],
      },
      {
        title: 'Database Schema Visualizer',
        description: 'PROJECTS.DB_VISUALIZER.DESCRIPTION',
        code: 'https://github.com/DylanMolinaArroyo/Database_Schema_Visualizer',
        tags: ['SQL', 'Web'],
      },
      {
        title: 'Christmas Compiler',
        description: 'PROJECTS.CHRISTMAS_COMPILER.DESCRIPTION',
        code: 'https://github.com/DylanMolinaArroyo/Christmas_Compiler',
        tags: ['Java', 'JFLEX', 'Java CUP'],
      },
      {
        title: 'Mini-SNS',
        description: 'PROJECTS.MINI_SNS.DESCRIPTION',
        code: 'https://github.com/DylanMolinaArroyo/Mini-SNS',
        tags: ['Node.js', 'Express', 'MongoDB', 'EJS'],
      },
    ];
  }
}
