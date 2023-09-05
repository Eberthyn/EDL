import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atividade-modulo2',
  templateUrl: './atividade-modulo2.component.html',
  styleUrls: ['./atividade-modulo2.component.css']
})
export class AtividadeModulo2Component {

  perguntas = [
    {
      id: '1',
      texto: 'As EDL’s devem ser instaladas em locais como:',
      resposta: null,
      resultado: null,
      respostaCorreta: 'b',
      respostaCorretaTexto: 'Correto, áreas como áreas de serviço, quintais, jardins, varandas, galpões, entre outros, são indicados para instalação de EDL’s, porém em ambientes de sombra e protegidos da chuva e do sol.',
      respostaErradaTexto: 'Errado. As EDL’s devem ser instaladas em ambientes de sombra e protegidos da chuva e do sol, porém devem ser instaladas em locais abertos, para permitir a disseminação do larvicida pelas fêmeas para outros depósitos. Devem ser instaladas até 1,5m aumentando assim a oportunidade de visita das fêmeas de Aedes. As EDL’s devem ficar distante do manuseio de crianças para evitar danos ao dispositivo. O piriproxifem é eficaz em doses muito baixas e praticamente sem toxicidade para vertebrados (incluindo o ser humano e os animais domésticos).'
    },
  ];

  resposta: string = '';

  opcoesResposta = [
    { valor: 'a', texto: 'Ambiente de sombra e protegido da chuva e do sol, principalmente locais fechados onde outros inseticidas pulverizantes não acessam.' },
    { valor: 'b', texto: 'Preferentemente no peridomicílio ou área externa, em áreas abertas.' },
    { valor: 'c', texto: 'Ambiente de sombra e protegido da chuva e do sol, em locais expostos a crianças e animais domésticos.' },
    { valor: 'd', texto: 'Alto de telhados e próximos a caixas d’água.' },
  ];

  constructor(
    private router: Router
  ) { }

  ir() {
    this.router.navigate(['encerramento'])
  }

  voltar() {
    this.router.navigate(['modulo2-aula5'])
  }

  verificarResposta(pergunta: any) {
    if (pergunta.resposta === pergunta.respostaCorreta) {
      return pergunta.resultado = pergunta.respostaCorretaTexto;
    } else {
      return pergunta.resultado = pergunta.respostaErradaTexto;
    }
  }

  todasAsRespostasForamSelecionadas(): boolean {
    return this.perguntas.every((pergunta) => pergunta.resposta !== null);
  }
}
