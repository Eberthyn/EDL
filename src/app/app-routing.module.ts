import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MaterialComplementarComponent } from './material-complementar/material-complementar.component';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';
import { CreditosComponent } from './creditos/creditos.component';

import { Modulo1Aula1Component } from './modulo1/aula1/modulo1-aula1/modulo1-aula1.component';
import { Modulo1Aula2Component } from './modulo1/aula2/modulo1-aula2/modulo1-aula2.component';
import { Modulo1Aula3Component } from './modulo1/aula3/modulo1-aula3/modulo1-aula3.component';

import { Modulo2Aula1Component } from './modulo2/aula1/modulo2-aula1/modulo2-aula1.component';
import { Modulo2Aula2Component } from './modulo2/aula2/modulo2-aula2/modulo2-aula2.component';
import { Modulo2Aula3Component } from './modulo2/aula3/modulo2-aula3/modulo2-aula3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'material-complementar', component: MaterialComplementarComponent },
  { path: 'bibliografia', component: BibliografiaComponent },
  { path: 'creditos', component: CreditosComponent },

  { path: 'modulo1-aula1', component: Modulo1Aula1Component },
  { path: 'modulo1-aula2', component: Modulo1Aula2Component },
  { path: 'modulo1-aula3', component: Modulo1Aula3Component },

  { path: 'modulo2-aula1', component: Modulo2Aula1Component },
  { path: 'modulo2-aula2', component: Modulo2Aula2Component },
  { path: 'modulo2-aula3', component: Modulo2Aula3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
