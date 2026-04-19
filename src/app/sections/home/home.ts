import { ScrollAnimateDirective } from '../../shared/scroll-animate.directive';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [ScrollAnimateDirective, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
