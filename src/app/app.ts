import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Navbar } from './shared/navbar/navbar';
import { Home } from './sections/home/home';
import { About } from './sections/about/about';
import { Education } from './sections/education/education';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, About, Education, Experience, Projects, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('DylanMA-Portfolio');

  constructor(private titleService: Title) {
    this.titleService.setTitle('Dylan Molina — Software Engineer');
  }
}
