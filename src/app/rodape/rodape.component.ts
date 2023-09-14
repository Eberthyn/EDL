import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  rodapeFixo = false;
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.fixaRodape()
    }, 50);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.fixaRodape();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.fixaRodape();
  }

  fixaRodape() {
    if (document.body.scrollHeight >= window.innerHeight) {
      return this.rodapeFixo = false;
    } else {
      return this.rodapeFixo = true;
    }
  }
}
