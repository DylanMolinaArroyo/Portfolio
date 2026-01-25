import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

export interface Navitem {
  label: string;
  icon: string;
  section: string;
}

export interface SnsItem {
  icon: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, ToggleSwitchModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Navbar implements OnInit {
  Navitems: Navitem[] = [];
  SnsItems: SnsItem[] = [];

  menuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setupScrollSpy();

    this.Navitems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        section: 'home',
      },
      {
        label: 'About',
        icon: 'pi pi-user',
        section: 'about',
      },
      {
        label: 'Education',
        icon: 'pi pi-graduation-cap',
        section: 'education',
      },
      {
        label: 'Experience',
        icon: 'pi pi-briefcase',
        section: 'experience',
      },
      {
        label: 'Projects',
        icon: 'pi pi-palette',
        section: 'projects',
      },
      {
        label: 'Skills',
        icon: 'pi pi-code',
        section: 'skills',
      },
    ];

    this.SnsItems = [
      {
        icon: 'pi pi-github',
        link: 'https://github.com',
      },
      {
        icon: 'pi pi-linkedin',
        link: 'https://linkedin.com',
      },
      {
        icon: 'pi pi-envelope',
        link: 'mailto:email@example.com',
      },
    ];
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = 'auto';
  }

  scrollToSection(sectionId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/'], { fragment: sectionId });
    } else {
      this.router
        .navigate([], {
          fragment: sectionId,
          queryParamsHandling: 'preserve',
        })
        .then(() => {
          this.smoothScroll(sectionId);
        });
    }
  }

  private smoothScroll(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  private setupScrollSpy(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const fragment = this.router.parseUrl(event.url).fragment;
        if (fragment) {
          setTimeout(() => this.smoothScroll(fragment), 100);
        }
      });
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (window.innerWidth > 767 && this.menuOpen) {
      this.closeMenu();
    }
  }

  // Cerrar menú al hacer click fuera
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const navbar = target.closest('.navbar');
    const hamburgerBtn = target.closest('.hamburger-btn');

    if (this.menuOpen && navbar && !hamburgerBtn) {
      this.closeMenu();
    }
  }
}
