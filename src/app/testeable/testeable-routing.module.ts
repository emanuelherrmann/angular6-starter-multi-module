import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TesteableComponent } from './testeable.component';

const routes: Routes = [
  { path: '' , component: TesteableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteableRoutingModule { }
