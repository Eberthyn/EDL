import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Declare a global variable for the Tip function
declare var Tip: any;
declare var UnTip: any;

@Component({
  selector: 'app-modulo2-aula2',
  templateUrl: './modulo2-aula2.component.html',
  styleUrls: ['./modulo2-aula2.component.css']
})
export class Modulo2Aula2Component {

  areas = [
    { alt: "a", title: "Nº EDL: Número da<br>Estação Disseminadora<br>definida para o imóvel.", coords: '13,86,22' },
    { alt: "b", title: "Logradouro (nome, número):<br>Revisar se o endereço onde<br>está a EDL, está correto, se<br>não, atualizar na coluna de<br> observações.", coords: '223,87,23' },
    { alt: "c", title: "Local de instalação: Local no<br> imóvel onde ficou a EDL, o<br> qual foi definido junto com<br> o residente no momento da<br> implantação.", coords: '428,87,21' },
    { alt: "d", title: "Responsável do imóvel: Pessoa que<br> autorizou a entrada ao domicílio e<br> acompanhou a instalação das EDL's", coords: '548,76,21' },
    { alt: "e", title: "Profissional encarregado da <br>manutenção: Profissional de<br> campo encarregado da<br> manutenção mensal da EDL,<br> designado pelo gestor ou<br> profissional encarregado da<br> estratégia no município.", coords: '671,76,20' },
    { alt: "f", title: "Nível de água na EDL:<br>Verificar o nível de água <br>da EDL e marcar *Seca*,<br> se a EDL se encontra<br> sem água no momento<br> da manutenção; *< 50%*,<br> se a EDL se encontra com<br> o nível de água embaixo<br> da metade do pote; e<br> *>= 50%*, se a EDL se<br> encontra com o nível de<br> água acima da metade<br> do pote.", coords: '802,69,20' },
    { alt: "g", title: "Tipo de novidades: Marcar<br> com X a novidade apresentada<br> no momento da manutenção.", coords: '1001,69,19' },
    { alt: "h", title: "Observações:<br>Informações adicionais que<br>o ACE acredite necessárias<br>para complementar a vistoria<br>realizada ou condições que<br>possam comprometer a<br>qualidade da EDL.", coords: '1190,69,21' },

    { alt: "1", title: "Presença de larvas:<br>Presença de larvas de <i>Ae.<br> Aegypti ou Ae. Albopictus</i><br>na água contida no<br>interior da EDL.", coords: "875,148,17" },
    { alt: "2", title: "Presença de pupas:<br>Presença de pupas de<br><i>Ae. Aegypti ou Ae.<br>Albopictus</i> na água <br>contida no interior<br> da EDL.", coords: "913,149,18" },
    { alt: "3", title: "Tecido desaparecido:<br>Ausência do tecido <br>no momento da<br>manutenção da EDL.", coords: "950,149,15" },
    { alt: "4", title: "Imóvel fechado:<br>No momento da visita<br>para a manutenção da<br>EDL, o imóvel se<br>encontra fechado.", coords: "986,149,16" },
    { alt: "5", title: "Estação Disseminadora<br>não instalada:<br>No momento da visita<br> para a manutenção da EDL,<br> o residente informou que a <br>EDL nunca foi instalada, o<br>qual pode acontecer por<br>erros no preenchimento ou<br>digitação do endereço.", coords: "1022,149,15" },
    { alt: "6", title: "Estação Disseminadora<br> desaparecida:<br> No momento da visita<br> para a manutenção da<br> EDL, o profissional não <br>localiza a EDL no local<br> de instalação, o qual <br>pode acontecer porque <br>a EDL é reaproveitada <br>para outros fins ou <br>foi descartada por<br> desconhecimento do<br>objetivo da EDL no<br> imóvel.", coords: "1056,149,15" },
    { alt: "7", title: "Estação Disseminadora<br> quebrada:<br>EDL danificada que<br>impeça seu bom<br>funcionamento.", coords: "1089,148,15" },
    { alt: "8", title: "Estação Disseminadora retirada:<br>EDL retirada do imóvel por<br> desistência de participação<br> ou mudança do residente,<br> ou dificuldade de acesso<br> ao imóvel, em pelo menos<br> duas visitas de manutenção.", coords: "1124,149,16" }
  ]

  constructor(
    private router: Router
  ) { }

  showTooltip(tooltipText: string) {
    // Exibe o tooltip com o texto fornecido
    Tip(tooltipText);
  }

  hideTooltip() {
    // Oculta o tooltip
    UnTip();
  }

  ir() {
    this.router.navigate(['modulo2-aula3'])
  }

  voltar() {
    this.router.navigate(['modulo2-aula1'])
  }
}
