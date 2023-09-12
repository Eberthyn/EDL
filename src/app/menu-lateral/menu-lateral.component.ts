import { Component, HostListener, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  @ViewChild('menuLateral') menuLateral!: ElementRef;

  activeSection!: string;

  sections = [
    { id: '1', title: 'Introdução', url: 'introducao' },
    { id: '2', title: 'Módulo 1: Combate ao mosquito Aedes', url: 'introducao-modulo1' },
    { id: '3', title: 'Aspectos básicos da biologia, ecologia e controle de Aedes', url: 'modulo1-aula1' },
    { id: '4', title: 'Inseticidas reguladores de crescimento', url: 'modulo1-aula2' },
    { id: '5', title: 'O que é uma Estação Disseminadora de Larvicida (EDL) e como funciona?', url: 'modulo1-aula3' },
    { id: '6', title: 'Atividade', url: 'atividade-modulo1' },
    { id: '7', title: 'Módulo 2: Implantação, manutenção e distribuição da EDL', url: 'introducao-modulo2' },
    { id: '8', title: 'Implantação da EDL', url: 'modulo2-aula1' },
    { id: '9', title: 'Manutenção e registro da EDL', url: 'modulo2-aula2' },
    { id: '10', title: 'Métodos de distribuição em campo da EDL', url: 'modulo2-aula3' },
    { id: '11', title: 'Supervisão da EDL', url: 'modulo2-aula4' },
    { id: '12', title: 'Logística estratégica e operacional', url: 'modulo2-aula5' },
    { id: '13', title: 'Atividade', url: 'atividade-modulo2' },
    { id: '14', title: 'Encerramento', url: 'encerramento' }
  ];

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.sharedService.windowSize();
    setTimeout(() => {
      this.highlightActiveSection();
    }, 200);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.sharedService.windowSize();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.highlightActiveSection();
  }

  abrirMenu() {
    this.sharedService.toggleSidebar();
  }

  highlightActiveSection(): void {
    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        this.activeSection = section.id
      }
    }
  }

  subItem(section: any) {
    return (section.id === '1' ||
      section.id === '2') ||
      (section.id === '7' ||
        section.id === '14')
  }

  introducao(section: any) {
    return (section.id === '1')
  }

  isSectionInView(section: any): boolean {
    return this.activeSection === section.id;
  }

  goToSection(section: any): void {
    this.activeSection = section.id;
    const element = document.getElementById(section.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.router.navigate([section.url]);
  }
}