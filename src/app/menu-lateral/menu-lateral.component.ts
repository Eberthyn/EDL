import { Component, Input, HostListener, OnInit, Renderer2, ElementRef } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  @Input()
  activeSection!: string;
  sections = [
    { id: '0', title: 'Introdução', url: 'introducao' },
    { id: '1', title: 'Módulo 1: Combate ao mosquito Aedes', url: 'introducao-modulo1' },
    { id: '2', title: 'Aspectos básicos da biologia, ecologia e controle de Aedes', url: 'modulo1-aula1' },
    { id: '3', title: 'Inseticidas reguladores de crescimento', url: 'modulo1-aula2' },
    { id: '4', title: 'O que é uma Estação Disseminadora de Larvicida (EDL) e como funciona?', url: 'modulo1-aula3' },
    { id: '5', title: 'Atividade', url: 'atividade-modulo1' },
    { id: '6', title: 'Módulo 2: Implantação, manutenção e distribuição da EDL', url: 'introducao-modulo2' },
    { id: '7', title: 'Implantação da EDL', url: 'modulo2-aula1' },
    { id: '8', title: 'Manutenção e registro da EDL', url: 'modulo2-aula2' },
    { id: '9', title: 'Métodos de distribuição em campo da EDL', url: 'modulo2-aula3' },
    { id: '10', title: 'Supervisão da EDL', url: 'modulo2-aula4' },
    { id: '11', title: 'Logística estratégica e operacional', url: 'modulo2-aula5' },
    { id: '12', title: 'Atividade', url: 'atividade-modulo2' },
    { id: '13', title: 'Encerramento', url: 'encerramento' }
  ];

  constructor(
    private sharedService: SharedService,
    private router: Router
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

  isSectionInView(section: any): boolean {
    return this.activeSection === section.id;
  }

  goToSection(section: any): void {
    this.router.navigate([section.url]);

    this.activeSection = section.id;
    const element = document.getElementById(section.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}