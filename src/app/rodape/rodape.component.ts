import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.fixaRodape()
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.fixaRodape();
  }

  fixaRodape() {
    return document.body.scrollHeight > window.innerHeight;
  }
}
