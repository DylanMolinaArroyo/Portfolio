import { Component, signal, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { PrimeNG } from 'primeng/config';

import { Navbar } from './components/navbar/navbar';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Education } from './pages/education/education';

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, About, Education, Experience, Projects, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('DylanMA-Portfolio');
  constructor(
    private primeng: PrimeNG,
    private titleService: Title,
  ) {
    this.titleService.setTitle('Dylan MA - Portfolio');
  }

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
