import { Component, OnInit } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { TranslatePipe } from '@ngx-translate/core';

export interface TechnologyItem {
  icon: string;
  name: string;
}

export interface TechGroup {
  labelKey: string;
  items: TechnologyItem[];
}

export interface Skill {
  title: string;
  description: string;
}

export interface Language {
  nameKey: string;
  levelKey: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [ScrollAnimateDirective, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit {
  techGroups: TechGroup[] = [];
  skills: Skill[] = [];
  languages: Language[] = [];

  ngOnInit() {
    this.techGroups = [
      {
        labelKey: 'SKILLS.GROUPS.LANGUAGES',
        items: [
          { icon: 'assets/icons/skills/go.svg', name: 'Go' },
          { icon: 'assets/icons/skills/typescript.svg', name: 'TypeScript' },
          { icon: 'assets/icons/skills/python.svg', name: 'Python' },
          { icon: 'assets/icons/skills/java.svg', name: 'Java' },
        ],
      },
      {
        labelKey: 'SKILLS.GROUPS.FRONTEND',
        items: [
          { icon: 'assets/icons/skills/angular.svg', name: 'Angular' },
          { icon: 'assets/icons/skills/react.svg', name: 'React' },
        ],
      },
      {
        labelKey: 'SKILLS.GROUPS.BACKEND',
        items: [{ icon: 'assets/icons/skills/nodejs.svg', name: 'Node.js' }],
      },
      {
        labelKey: 'SKILLS.GROUPS.DATABASES',
        items: [
          { icon: 'assets/icons/skills/postgresql.svg', name: 'PostgreSQL' },
          { icon: 'assets/icons/skills/mongodb.svg', name: 'MongoDB' },
          { icon: 'assets/icons/skills/supabase.svg', name: 'Supabase' },
          { icon: 'assets/icons/skills/firebase.svg', name: 'Firebase' },
        ],
      },
      {
        labelKey: 'SKILLS.GROUPS.TOOLS',
        items: [{ icon: 'assets/icons/skills/github.svg', name: 'GitHub' }],
      },
    ];

    this.skills = [
      { title: 'SKILLS.COLLABORATION.TITLE', description: 'SKILLS.COLLABORATION.DESC' },
      { title: 'SKILLS.PROBLEM_SOLVING.TITLE', description: 'SKILLS.PROBLEM_SOLVING.DESC' },
      { title: 'SKILLS.LEARNING.TITLE', description: 'SKILLS.LEARNING.DESC' },
      { title: 'SKILLS.TIME_MANAGEMENT.TITLE', description: 'SKILLS.TIME_MANAGEMENT.DESC' },
      { title: 'SKILLS.COMMUNICATION.TITLE', description: 'SKILLS.COMMUNICATION.DESC' },
      { title: 'SKILLS.CRITICAL_THINKING.TITLE', description: 'SKILLS.CRITICAL_THINKING.DESC' },
    ];

    this.languages = [
      {
        nameKey: 'SKILLS.LANG_NAMES.SPANISH',
        levelKey: 'SKILLS.LANG_LEVELS.NATIVE',
        icon: 'assets/icons/languages/es.svg',
      },
      {
        nameKey: 'SKILLS.LANG_NAMES.ENGLISH',
        levelKey: 'SKILLS.LANG_LEVELS.C1',
        icon: 'assets/icons/languages/en.svg',
      },
    ];
  }
}
