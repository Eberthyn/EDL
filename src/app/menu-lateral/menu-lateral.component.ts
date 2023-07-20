import { Component, Input, HostListener, OnInit, Renderer2, ElementRef } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  @Input()
  activeSection!: string;
  sections = [
    { id: 'section1', title: 'Section 1' },
    { id: 'section2', title: 'Section 2' },
    { id: 'section3', title: 'Section 3' },
    { id: 'section4', title: 'Section 4' },
    { id: 'section5', title: 'Section 5' },
    { id: 'section6', title: 'Section 6' }
  ];

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    document.documentElement.scrollTop;
    this.onResize();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.highlightActiveSection();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.sharedService.resize();
  }

  abrirMenu() {
    this.sharedService.toggleSidebar();
  }

  highlightActiveSection(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    for (const section of this.sections) {
      const element = document.getElementById(section.id);

      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          this.activeSection = section.id;
        }
      }
    }
  }

  isSectionInView(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  scrollToSection(sectionId: string): void {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}