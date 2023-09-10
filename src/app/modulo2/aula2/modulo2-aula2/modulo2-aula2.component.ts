import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import imageMapResize from 'image-map-resizer';

// Declare a global variable for the Tip function
declare var Tip: any;
declare var UnTip: any;

@Component({
  selector: 'app-modulo2-aula2',
  templateUrl: './modulo2-aula2.component.html',
  styleUrls: ['./modulo2-aula2.component.css']
})
export class Modulo2Aula2Component implements AfterViewInit{

  areas = [
    { alt: "a", title: "<b>Nº EDL:</b><br>Número da<br> Estação Disseminadora<br> definida para o imóvel.", coords: '13,86,22' },
    { alt: "b", title: "<b>Logradouro (nome, número):</b><br>Colocar o endereço<br> completo, atualizado e<br> vigente do imóvel.", coords: '223,87,23' },
    { alt: "c", title: "<b>Local de instalação:</b><br>Local no imóvel onde ficou<br> a EDL, o qual foi definido<br> junto com o residente no<br> momento da implantação.", coords: '428,87,21' },
    { alt: "d", title: "<b>Responsável do imóvel:</b><br>Pessoa que autorizou a<br> entrada ao domicílio e<br> acompanhou a instalação das EDL's.", coords: '548,76,21' },
    { alt: "e", title: "<b>Profissional encarregado da manutenção:</b><br>Profissional de campo encarregado<br> da manutenção mensal da EDL,<br> designado pelo gestor ou<br> profissional encarregado da<br> estratégia no município.", coords: '671,76,20' },
    { alt: "f", title: "<b>Nível de água na EDL:</b><br>Verificar o nível de água da<br> EDL e marcar *Seca*, se a<br> EDL se encontra sem água<br> no momento da manutenção;<br> *< 50%*, se a<br> EDL se encontra com o<br> nível de água embaixo da<br> metade do pote; e *>= 50%*,<br> se a EDL se encontra com o<br> nível de água acima da<br> metade do pote.", coords: '802,69,20' },
    { alt: "g", title: "<b>Tipo de novidades:</b><br>Marcar com X a novidade<br>apresentada no momento<br>da manutenção.", coords: '1001,69,19' },
    { alt: "h", title: "<b>Observações:</b><br>Informações adicionais que<br>o ACE acredite necessárias<br>para complementar a vistoria<br>realizada ou condições que<br>possam comprometer a<br>qualidade da EDL.", coords: '1190,69,21' },
    { alt: "1", title: "<b>Presença de larvas:</b><br>Presença de larvas de <i>Ae.<br> Aegypti ou Ae. Albopictus</i><br>na água contida no<br>interior da EDL.", coords: "875,148,17"},
    { alt: "2", title: "<b>Presença de pupas:</b><br>Presença de pupas de<br><i>Ae. Aegypti ou Ae.<br>Albopictus</i> na água contida<br> no interior da EDL.", coords: "913,149,18"},
    { alt: "3", title: "<b>Tecido desaparecido:</b><br>Ausência do tecido no<br>momento da<br>manutenção da EDL.", coords: "950,149,15"},
    { alt: "4", title: "<b>Imóvel fechado:</b><br>No momento da visita<br>para a manutenção da<br>EDL, o imóvel se<br>encontra fechado.", coords: "986,149,16"},
    { alt: "5", title: "<b>Estação Disseminadora<br>não instalada:</b><br>No momento da visita<br> para a manutenção da EDL,<br> o residente informou que a <br>EDL nunca foi instalada, o<br>qual pode acontecer por<br>erros no preenchimento ou<br>digitação do endereço.", coords: "1022,149,15"},
    { alt: "6", title: "<b>Estação Disseminadora<br>desaparecida:</b><br>No momento da visita<br> para a manutenção da EDL,<br> o profissional não localiza a<br>EDL no local de instalação,<br>o qual pode acontecer<br>porque a EDL é<br>reaproveitada para outros<br>fins ou foi descartada por<br> desconhecimento do<br>objetivo da EDL no imóvel.", coords: "1056,149,15"},
    { alt: "7", title: "<b>Estação Disseminadora<br> quebrada:</b><br>EDL danificada que<br>impeça seu bom<br>funcionamento.", coords: "1089,148,15"},
    { alt: "8", title: "<b>Estação Disseminadora<br> retirada:</b><br>EDL retirada do imóvel<br> por desistência de<br> participação ou mudança<br> do residente, ou dificuldade<br> de acesso ao imóvel, em<br> pelo menos duas visitas<br> de manutenção.", coords: "1124,149,16"}
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
    this.router.navigate(['modulo2-aula3'])
  }

  voltar() {
    this.router.navigate(['modulo2-aula1'])
  }
}
