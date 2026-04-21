import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Navbar } from './shared/navbar/navbar';
import { Home } from './sections/home/home';
import { About } from './sections/about/about';
import { Education } from './sections/education/education';
import { Certifications } from './sections/certifications/certifications';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Footer } from './shared/footer/footer';

import { TranslateService } from '@ngx-translate/core';
import translationsEN from '../../public/i18n/en.json';

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, About, Education, Certifications, Experience, Projects, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('DylanMolina');
  private translate = inject(TranslateService);

  constructor(private titleService: Title) {
    this.titleService.setTitle('Dylan Molina — Software Engineer');
    this.translate.addLangs(['de', 'en']);
    this.translate.setTranslation('en', translationsEN);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }
}
