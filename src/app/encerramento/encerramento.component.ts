import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encerramento',
  templateUrl: './encerramento.component.html',
  styleUrls: ['./encerramento.component.css']
})
export class EncerramentoComponent {
  constructor(
    private router: Router
  ) { }

  voltar() {
    this.router.navigate(['atividade-modulo2'])
  }
}
