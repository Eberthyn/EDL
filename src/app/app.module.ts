import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { MaterialComplementarComponent } from './material-complementar/material-complementar.component';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';
import { CreditosComponent } from './creditos/creditos.component'
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { RodapeComponent } from './rodape/rodape.component';
import { Modulo1Aula1Component } from './modulo1/aula1/modulo1-aula1/modulo1-aula1.component';
import { Modulo1Aula2Component } from './modulo1/aula2/modulo1-aula2/modulo1-aula2.component';
import { Modulo1Aula3Component } from './modulo1/aula3/modulo1-aula3/modulo1-aula3.component';
import { Modulo2Aula1Component } from './modulo2/aula1/modulo2-aula1/modulo2-aula1.component';
import { Modulo2Aula2Component } from './modulo2/aula2/modulo2-aula2/modulo2-aula2.component';
import { Modulo2Aula3Component } from './modulo2/aula3/modulo2-aula3/modulo2-aula3.component';


@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    MenuSuperiorComponent,
    MenuLateralComponent,
    Modulo1Aula1Component,
    HomeComponent,
    Modulo1Aula2Component,
    Modulo1Aula3Component,
    Modulo2Aula1Component,
    Modulo2Aula2Component,
    Modulo2Aula3Component,
    MaterialComplementarComponent,
    BibliografiaComponent,
    CreditosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
