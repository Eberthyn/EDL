import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bibliografia',
  templateUrl: './bibliografia.component.html',
  styleUrls: ['./bibliografia.component.css']
})
export class BibliografiaComponent {
  constructor(
    private router: Router
  ) { }

  voltar() {
    this.router.navigate([''])
  }
}
