import { Component, signal, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { PrimeNG } from 'primeng/config';

import { Navbar } from './components/navbar/navbar';

import { Home } from './sections/home/home';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Education } from './sections/education/education';

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
    this.titleService.setTitle('Portfolio - Dylan MA');
  }

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
