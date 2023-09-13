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
    { alt: "1", title: "Nº EDL: Número da<br>Estação Disseminadora<br>definida para o imóvel.", coords: '15,79,14' },
    { alt: "2", title: "Latitude e Longitude: Colocar a<br>coordenada geográfica em graus<br>decimais utilizando GPS,<br>aplicativo de georreferenciamento<br>ou base cadastral do imóvel<br>disponibilizado pelo município.", coords: '187,80,13' },
    { alt: "3", title: "Logradouro (nome, número):<br>Colocar o endereço<br>completo, atualizado e<br>vigente do imóvel.", coords: '338,81,14' },
    { alt: "4", title: "Quadra/Quarteirão:<br>Número de quadra ou<br> quarteirão utilizado pelo<br> programa de controle de<br> endemias do município.", coords: '611,80,13' },
    { alt: "5", title: "Local de instalação:Local<br>no imóvel onde ficou a<br>EDL, o qual foi definido<br>junto com o residente no<br>momento da implantação.", coords: '704,81,15' },
    { alt: "6", title: "Responsável do imóvel:<br>Pessoa que autorizou a entrada<br> ao domicílio e acompanhou a<br>instalação das EDL's.", coords: '826,80,14' },
    { alt: "7", title: "Profissional encarregado da<br> manutenção: Profissional de<br> campo encarregado da<br>manutenção mensal da EDL,<br>designado pelo gestor ou<br>profissional encarregado da<br>estratégia no município.", coords: '970,79,15' },
    { alt: "8", title: "Data de instalação:<br>Data do dia de instalação<br> da EDL.", coords: '1115,81,13' }
  ]

  constructor(
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    imageMapResize();
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
