import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Navbar {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/'],
      },
      {
        label: 'About',
        icon: 'pi pi-user',
        routerLink: ['/about'],
      },
      {
        label: 'Education',
        icon: 'pi pi-graduation-cap',
        routerLink: ['/education'],
      },
      {
        label: 'Experience',
        icon: 'pi pi-briefcase',
        routerLink: ['/experience'],
      },

      {
        label: 'My Projects',
        icon: 'pi pi-palette',
        routerLink: ['/projects'],
      },
      {
        label: 'Skills',
        icon: 'pi pi-code',
        routerLink: ['/skills'],
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: ['/contact'],
      },
    ];
  }
}
