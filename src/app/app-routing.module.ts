import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IntroducaoComponent } from './introducao/introducao/introducao.component';
import { MaterialComplementarComponent } from './material-complementar/material-complementar.component';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';
import { CreditosComponent } from './creditos/creditos.component';

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

import { EncerramentoComponent } from './encerramento/encerramento.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'introducao', component: IntroducaoComponent },
  // { path: 'material-complementar', component: MaterialComplementarComponent },
  { path: 'referencias', component: BibliografiaComponent },
  { path: 'creditos', component: CreditosComponent },

  { path: 'introducao-modulo1', component: IntroducaoModulo1Component },
  { path: 'modulo1-aula1', component: Modulo1Aula1Component },
  { path: 'modulo1-aula2', component: Modulo1Aula2Component },
  { path: 'modulo1-aula3', component: Modulo1Aula3Component },
  { path: 'atividade-modulo1', component: AtividadeModulo1Component},

  { path: 'introducao-modulo2', component: IntroducaoModulo2Component },
  { path: 'modulo2-aula1', component: Modulo2Aula1Component },
  { path: 'modulo2-aula2', component: Modulo2Aula2Component },
  { path: 'modulo2-aula3', component: Modulo2Aula3Component },
  { path: 'modulo2-aula4', component: Modulo2Aula4Component },
  { path: 'modulo2-aula5', component: Modulo2Aula5Component },
  { path: 'atividade-modulo2', component: AtividadeModulo2Component },

  { path: 'encerramento', component: EncerramentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
