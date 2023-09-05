import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import imageMapResize from 'image-map-resizer';

// Declare a global variable for the Tip function
declare var Tip: any;
declare var UnTip: any;

@Component({
  selector: 'app-modulo2-aula1',
  templateUrl: './modulo2-aula1.component.html',
  styleUrls: ['./modulo2-aula1.component.css']
})
export class Modulo2Aula1Component {

  areas = [
    { alt: "1", title: "<b>Nº EDL:</b><br>Número da<br> Estação Disseminadora<br> definida para o imóvel.", coords: '15,79,14' },
    { alt: "2", title: "<b>Latitude e Longitude:</b><br>Colocar a coordenada geográfica em graus<br> decimais utilizando GPS,<br> aplicativo de georreferenciamento<br> ou base cadastral do imóvel<br> disponibilizado pelo município.", coords: '187,80,13' },
    { alt: "3", title: "<b>Logradouro (nome, número):</b><br>Colocar o endereço<br> completo, atualizado e<br> vigente do imóvel.", coords: '338,81,14' },
    { alt: "4", title: "<b>Quadra/Quarteirão:</b><br>Número de quadra ou<br> quarteirão utilizado pelo<br> programa de controle de<br> endemias do município.", coords: '611,80,13' },
    { alt: "5", title: "<b>Local de instalação:</b><br>Local no imóvel onde ficou<br> a EDL, o qual foi definido<br> junto com o residente no<br> momento da implantação.", coords: '704,81,15' },
    { alt: "6", title: "<b>Responsável do imóvel:</b><br>Pessoa que autorizou a<br> entrada ao domicílio e<br> acompanhou a instalação das EDL's.", coords: '826,80,14' },
    { alt: "7", title: "<b>Profissional encarregado da manutenção:</b><br>Profissional de campo encarregado<br> da manutenção mensal da EDL,<br> designado pelo gestor ou<br> profissional encarregado da<br> estratégia no município.", coords: '970,79,15' },
    { alt: "8", title: "<b>Data de instalação:</b><br>Data do dia de<br> instalação da EDL.", coords: '1115,81,13' }
  ]

  constructor(
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    imageMapResize();
    console.log(this.areas)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    imageMapResize();
  }

  ir() {
    this.router.navigate(['modulo2-aula2'])
  }

  voltar() {
    this.router.navigate(['atividade-modulo1'])
  }

  showTooltip(tooltipText: string) {
    // Exibe o tooltip com o texto fornecido
    Tip(tooltipText);
  }

  hideTooltip() {
    // Oculta o tooltip
    UnTip();
  }
}
