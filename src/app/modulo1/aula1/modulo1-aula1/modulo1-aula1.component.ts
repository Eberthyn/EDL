import { Component } from '@angular/core';

@Component({
  selector: 'app-modulo1-aula1',
  templateUrl: './modulo1-aula1.component.html',
  styleUrls: ['./modulo1-aula1.component.css']
})
export class Modulo1Aula1Component {

  sections = [
    { id: 'section1', title: 'Section 1' },
    { id: 'section2', title: 'Section 2' },
    { id: 'section3', title: 'Section 3' }
  ];

}
