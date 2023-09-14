import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Declare a global variable for the Tip function
declare var Tip: any;
declare var UnTip: any;

@Component({
  selector: 'app-modulo2-aula4',
  templateUrl: './modulo2-aula4.component.html',
  styleUrls: ['./modulo2-aula4.component.css']
})
export class Modulo2Aula4Component {

  areas = [
    { alt: "a", title: "Nº EDL: Número da<br>Estação Disseminadora<br>definida para o imóvel.", coords: '37,156,24' },
    { alt: "b", title: "Logradouro (nome, número):<br>Colocar o endereço<br>completo, atualizado e<br>vigente do imóvel.", coords: '193,156,25' },
    { alt: "c", title: "Local de instalação: Local<br>no imóvel onde ficou a<br>EDL, o qual foi definido<br>junto com o residente no<br>momento da implantação.", coords: '391,156,25' },
    { alt: "d", title: "Responsável do imóvel:<br>Pessoa que autorizou a entrada<br> ao domicílio e acompanhou a<br>instalação das EDL's.", coords: '522,161,26' },
    { alt: "e", title: "Profissional encarregado da<br> manutenção: Profissional de<br> campo encarregado da<br>manutenção mensal da EDL,<br>designado pelo gestor ou<br>profissional encarregado da<br>estratégia no município.", coords: '640,161,26' },
    { alt: "f", title: "Mês da última vez que o profissional<br> visitou o imóvel: Mês no qual o<br> profissional de campo visitou por<br última vez o imóvel> para realizar manutenção da<br> EDL (informação disponibilizada<br> pelo residente).", coords: '755,162,25' },
    { alt: "g", title: "Realizou-se a aplicação do larvicida?:<br>Verificar se o profissional realizou<br> a re-impregnação do piriproxifem<br> na EDL instalada.", coords: '871,163,26' },
    { alt: "h", title: "Nível de água na EDL:<br>Verificar o nível de água <br>da EDL e marcar *Seca*,<br> se a EDL se encontra<br> sem água no momento<br> da manutenção; *< 50%*,<br> se a EDL se encontra com<br> o nível de água embaixo<br> da metade do pote; e<br> *>= 50%*, se a EDL se<br> encontra com o nível de<br> água acima da metade<br> do pote.", coords: '955,93,25' },
    { alt: "i", title: "Estado da EDL: Marcar <br>com base nos critérios de<br> qualidade da instalação<br> e manutenção das EDL's<br> descritas na secção 4.3<br> se o estado da EDL se<br> encontra adequado, ou<br> não.", coords: "1077,93,26"},
    { alt: "j", title: "Tipo de novidades: Marcar<br> com X a novidade apresentada<br> no momento da manutenção.", coords: "1191,94,24"},
    
    { alt: "1", title: "Presença de larvas:<br>Presença de larvas de <i>Ae.<br> Aegypti ou Ae. Albopictus</i><br>na água contida no<br>interior da EDL.", coords: "114,781,26"},
    { alt: "2", title: "Presença de pupas:<br>Presença de pupas de<br><i>Ae. Aegypti ou Ae.<br>Albopictus</i> na água <br>contida no interior<br> da EDL.", coords: "215,782,26"},
    { alt: "3", title: "Tecido desaparecido:<br>Ausência do tecido <br>no momento da<br>manutenção da EDL.", coords: "313,782,26"},
    { alt: "4", title: "Imóvel fechado:<br>No momento da visita<br>para a manutenção da<br>EDL, o imóvel se<br>encontra fechado.", coords: "415,781,26"},
    { alt: "5", title: "Estação Disseminadora<br>não instalada:<br>No momento da visita<br> para a manutenção da EDL,<br> o residente informou que a <br>EDL nunca foi instalada, o<br>qual pode acontecer por<br>erros no preenchimento ou<br>digitação do endereço.", coords: "493,783,27"},
    { alt: "6", title: "Estação Disseminadora<br> desaparecida:<br> No momento da visita<br> para a manutenção da<br> EDL, o profissional não <br>localiza a EDL no local<br> de instalação, o qual <br>pode acontecer porque <br>a EDL é reaproveitada <br>para outros fins ou <br>foi descartada por<br> desconhecimento do<br>objetivo da EDL no<br> imóvel.", coords: "671,780,27"},
    { alt: "7", title: "Estação Disseminadora<br> quebrada:<br>EDL danificada que<br>impeça seu bom<br>funcionamento.", coords: "843,784,25"},
    { alt: "8", title: "Estação Disseminadora retirada:<br>EDL retirada do imóvel por<br> desistência de participação<br> ou mudança do residente,<br> ou dificuldade de acesso<br> ao imóvel, em pelo menos<br> duas visitas de manutenção.", coords: "1003,784,25"}
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
    this.router.navigate(['modulo2-aula5'])
  }

  voltar() {
    this.router.navigate(['modulo2-aula3'])
  }
}
