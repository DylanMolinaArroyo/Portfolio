import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [ScrollAnimateDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
