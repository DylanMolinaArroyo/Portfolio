import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PrimeNG } from 'primeng/config';

import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Portfolio } from './pages/portfolio/portfolio';
import { Skills } from './pages/skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, About, Experience, Portfolio, Skills],
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
