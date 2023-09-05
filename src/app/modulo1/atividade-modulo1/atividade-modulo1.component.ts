import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atividade-modulo1',
  templateUrl: './atividade-modulo1.component.html',
  styleUrls: ['./atividade-modulo1.component.css']
})
export class AtividadeModulo1Component {

  perguntas = [
    {
      id: '1',
      texto: 'As fêmeas grávidas de Aedes aegypti e Aedes albopictus distribuem os ovos de uma mesma postura, em DIFERENTES depósitos com água. Esta afirmativa é:',
      resposta: null,
      resultado: null,
      respostaCorreta: 'verdadeiro',
      respostaCorretaTexto: 'Correto, os ovos de Aedes aegypti e Aedes albopictus são postos, diretamente sobre a superfície líquida ou em substrato úmido, acima da coluna de água, porém uma mesma postura pode ser distribuída em diferentes substratos “oviposição em saltos”, estratégia que permite aumentar a sobrevivência e dispersão desses mosquitos.',
      respostaErradaTexto: 'Errado, embora possam concentrá-los em um único local de oviposição, a maioria de vezes, uma mesma postura pode ser distribuída em diferentes substratos “oviposição em saltos”, estratégia que permite aumentar a sobrevivência e dispersão desses mosquitos.'
    },
    {
      id: '2',
      texto: 'A disseminação de larvicida pelos próprios mosquitos é SUFICIENTE para diminuir a infestação de mosquitos Aedes. Esta afirmativa é:',
      resposta: null,
      resultado: null,
      respostaCorreta: 'falso',
      respostaCorretaTexto: 'Correto, as arboviroses são doenças multifatoriais, e as medidas de controle vetorial em cada localidade devem ser avaliadas segundo o cenário epidemiológico, características sociodemográficas, capacidade operacional e recursos próprios dos programas de controle locais. Apesar de que a estratégia de disseminação de larvicida apresenta resultados promissores no controle de Aedes (especialmente em criadouros crípticos e de difícil acesso), se considera uma estratégia complementar às ações de rotina nos programas de controle vetorial.',
      respostaErradaTexto: 'Errado, a Organização Pan-Americana de Saúde e o Ministério da Saúde, orientam aos tomadores de decisões para aplicar o Manejo Integrado de Vetores (MIV) para o monitoramento e controle de vetores, visando otimizar o uso de recursos direcionados aos programas de controle, melhorar a eficácia e a eficiência das ações, através de análise situacional, desenho de operação e planejamento, implementação, monitoramento e avaliação.'
    },
  ];

  resposta: string = '';

  opcoesResposta = [
    { valor: 'verdadeiro', texto: 'Verdadeira' },
    { valor: 'falso', texto: 'Falsa' },
  ];

  constructor(
    private router: Router,
  ) { }

  ir() {
    this.router.navigate(['introducao-modulo2'])
  }

  voltar() {
    this.router.navigate(['modulo1-aula3'])
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
