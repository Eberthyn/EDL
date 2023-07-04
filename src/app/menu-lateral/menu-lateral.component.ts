import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  @Input()
  sections!: { id: string; title: string; }[];
  activeSection!: string;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.highlightActiveSection();
  }

  highlightActiveSection(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

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