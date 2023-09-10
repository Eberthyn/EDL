import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import imageMapResize from 'image-map-resizer';

// Declare a global variable for the Tip function
declare var Tip: any;
declare var UnTip: any;

@Component({
  selector: 'app-modulo2-aula4',
  templateUrl: './modulo2-aula4.component.html',
  styleUrls: ['./modulo2-aula4.component.css']
})
export class Modulo2Aula4Component implements AfterViewInit {

  areas = [
    { alt: "a", title: "<b>Nº EDL:</b><br>Número da<br> Estação Disseminadora<br> definida para o imóvel.", coords: '37,156,24' },
    { alt: "b", title: "<b>Logradouro (nome, número):</b><br>Colocar o endereço<br> completo, atualizado e<br> vigente do imóvel.", coords: '193,156,25' },
    { alt: "c", title: "<b>Local de instalação:</b><br>Local no imóvel onde ficou<br> a EDL, o qual foi definido<br> junto com o residente no<br> momento da implantação.", coords: '391,156,25' },
    { alt: "d", title: "<b>Responsável do imóvel:</b><br>Pessoa que autorizou a<br> entrada ao domicílio e<br> acompanhou a instalação das EDL's.", coords: '522,161,26' },
    { alt: "e", title: "<b>Profissional encarregado da manutenção:</b><br>Profissional de campo encarregado<br> da manutenção mensal da EDL,<br> designado pelo gestor ou<br> profissional encarregado da<br> estratégia no município.", coords: '640,161,26' },
    { alt: "f", title: "<b>Mês da última vez que o<br> profissional visitou o imóvel:</b><br> Mês no qual o profissional de campo<br> visitou por última vez o imóvel<br> para realizar manutenção da<br> EDL (informação disponibilizada<br> pelo residente).", coords: '755,162,25' },
    { alt: "g", title: "<b>Realizou-se a aplicação do larvicida?:</b><br>Verificar se o profissional<br> realizou a re-impregnação<br> do piriproxifem<br> na EDL instalada.", coords: '871,163,26' },
    { alt: "h", title: "<b>Nível de água na EDL:</b><br>Verificar o nível de água da<br> EDL e marcar *Seca*, se a<br> EDL se encontra sem água<br> no momento da manutenção;<br> *< 50%*, se a<br> EDL se encontra com o<br> nível de água embaixo da<br> metade do pote; e *>= 50%*,<br> se a EDL se encontra com o<br> nível de água acima da<br> metade do pote.", coords: '955,93,25' },
    { alt: "i", title: "<b>Estado da EDL:</b><br> Marcar com base nos<br> critérios de qualidade <br>da instalação e manutenção<br>das EDL's descritas na<br> secção 4.3 se o estado<br>da EDL se encontra<br>adequado, ou não.", coords: "1077,93,26"},
    { alt: "j", title: "<b>Tipo de novidades:</b><br>Marcar com X a novidade<br>apresentada no momento<br>da manutenção.", coords: "1191,94,24"},
    
    { alt: "1", title: "<b>Presença de larvas:</b><br>Presença de larvas de <i>Ae.<br> Aegypti ou Ae. Albopictus</i><br>na água contida no<br>interior da EDL.", coords: "114,781,26"},
    { alt: "2", title: "<b>Presença de pupas:</b><br>Presença de pupas de<br><i>Ae. Aegypti ou Ae.<br>Albopictus</i> na água contida<br> no interior da EDL.", coords: "215,782,26"},
    { alt: "3", title: "<b>Tecido desaparecido:</b><br>Ausência do tecido no<br>momento da<br>manutenção da EDL.", coords: "313,782,26"},
    { alt: "4", title: "<b>Imóvel fechado:</b><br>No momento da visita<br>para a manutenção da<br>EDL, o imóvel se<br>encontra fechado.", coords: "415,781,26"},
    { alt: "5", title: "<b>Estação Disseminadora<br>não instalada:</b><br>No momento da visita<br> para a manutenção da EDL,<br> o residente informou que a <br>EDL nunca foi instalada, o<br>qual pode acontecer por<br>erros no preenchimento ou<br>digitação do endereço.", coords: "493,783,27"},
    { alt: "6", title: "<b>Estação Disseminadora<br>desaparecida:</b><br>No momento da visita<br> para a manutenção da EDL,<br> o profissional não localiza a<br>EDL no local de instalação,<br>o qual pode acontecer<br>porque a EDL é<br>reaproveitada para outros<br>fins ou foi descartada por<br> desconhecimento do<br>objetivo da EDL no imóvel.", coords: "671,780,27"},
    { alt: "7", title: "<b>Estação Disseminadora<br> quebrada:</b><br>EDL danificada que<br>impeça seu bom<br>funcionamento.", coords: "843,784,25"},
    { alt: "8", title: "<b>Estação Disseminadora<br> retirada:</b><br>EDL retirada do imóvel<br> por desistência de<br> participação ou mudança<br> do residente, ou dificuldade<br> de acesso ao imóvel, em<br> pelo menos duas visitas<br> de manutenção.", coords: "1003,784,25"}
  ]

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    imageMapResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    imageMapResize();
  }

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
