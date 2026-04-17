import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [ScrollAnimateDirective, ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
