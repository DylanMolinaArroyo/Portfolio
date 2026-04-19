import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { TimelineComponent, TimelineItem } from '../../shared/timeline/timeline.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

export interface EducationItem {
  feat: string;
  institution: string;
  year: string;
  description: string[];
}

@Component({
  selector: 'app-education',
  imports: [ScrollAnimateDirective, TimelineComponent, TranslatePipe],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education implements OnInit, OnDestroy {
  items: EducationItem[] = [];
  timelineItems: TimelineItem[] = [];
  private sub?: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.sub = this.translate.stream([
      'EDUCATION.NETWORK_TECH.FEAT',
      'EDUCATION.NETWORK_TECH.DESCRIPTION',
      'EDUCATION.COMPUTER_ENG.FEAT',
      'EDUCATION.COMPUTER_ENG.DESCRIPTION',
    ]).subscribe(t => {
      this.items = [
        {
          feat: t['EDUCATION.NETWORK_TECH.FEAT'],
          institution: 'C.T.P Santa Rosa de Pocosol',
          year: '2019 - 2022',
          description: t['EDUCATION.NETWORK_TECH.DESCRIPTION'],
        },
        {
          feat: t['EDUCATION.COMPUTER_ENG.FEAT'],
          institution: 'Tecnológico de Costa Rica',
          year: '2023 - Present',
          description: t['EDUCATION.COMPUTER_ENG.DESCRIPTION'],
        },
      ];
      this.timelineItems = this.items.map(e => ({
        title: e.feat,
        subtitle: e.institution,
        year: e.year,
        description: e.description,
      }));
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
