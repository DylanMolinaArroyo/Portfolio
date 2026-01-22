import { Component } from '@angular/core';
import { Card, CardModule } from 'primeng/card';

@Component({
  selector: 'app-header',
  imports: [CardModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
