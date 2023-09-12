import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { IntroducaoComponent } from './introducao/introducao/introducao.component';
import { MaterialComplementarComponent } from './material-complementar/material-complementar.component';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';
import { CreditosComponent } from './creditos/creditos.component'
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { RodapeComponent } from './rodape/rodape.component';

import { IntroducaoModulo1Component } from './modulo1/introducao-modulo1/introducao-modulo1.component';
import { Modulo1Aula1Component } from './modulo1/aula1/modulo1-aula1/modulo1-aula1.component';
import { Modulo1Aula2Component } from './modulo1/aula2/modulo1-aula2/modulo1-aula2.component';
import { Modulo1Aula3Component } from './modulo1/aula3/modulo1-aula3/modulo1-aula3.component';
import { AtividadeModulo1Component } from './modulo1/atividade-modulo1/atividade-modulo1.component';

import { IntroducaoModulo2Component } from './modulo2/introducao-modulo2/introducao-modulo2.component';
import { Modulo2Aula1Component } from './modulo2/aula1/modulo2-aula1/modulo2-aula1.component';
import { Modulo2Aula2Component } from './modulo2/aula2/modulo2-aula2/modulo2-aula2.component';
import { Modulo2Aula3Component } from './modulo2/aula3/modulo2-aula3/modulo2-aula3.component';
import { Modulo2Aula4Component } from './modulo2/aula4/modulo2-aula4/modulo2-aula4.component';
import { Modulo2Aula5Component } from './modulo2/aula5/modulo2-aula5/modulo2-aula5.component';
import { AtividadeModulo2Component } from './modulo2/atividade-modulo2/atividade-modulo2.component';

import { SharedService } from './services/shared.service';

import { EncerramentoComponent } from './encerramento/encerramento.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    MenuSuperiorComponent,
    MenuLateralComponent,

    HomeComponent,
    IntroducaoComponent,

    IntroducaoModulo1Component,
    Modulo1Aula1Component,
    Modulo1Aula2Component,
    Modulo1Aula3Component,
    AtividadeModulo1Component,

    IntroducaoModulo2Component,
    Modulo2Aula1Component,
    Modulo2Aula2Component,
    Modulo2Aula3Component,
    Modulo2Aula4Component,
    Modulo2Aula5Component,
    AtividadeModulo2Component,

    MaterialComplementarComponent,
    BibliografiaComponent,
    CreditosComponent,
    EncerramentoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
