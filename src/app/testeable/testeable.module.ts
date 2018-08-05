import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TesteableRoutingModule } from './testeable-routing.module';
import { TesteableComponent } from './testeable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TesteableRoutingModule
  ],
  declarations: [TesteableComponent]
})
export class TesteableModule {

 }
