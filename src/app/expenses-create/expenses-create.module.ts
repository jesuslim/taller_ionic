import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensesCreatePageRoutingModule } from './expenses-create-routing.module';

import { ExpensesCreatePage } from './expenses-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpensesCreatePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ExpensesCreatePage]
})
export class ExpensesCreatePageModule { }
