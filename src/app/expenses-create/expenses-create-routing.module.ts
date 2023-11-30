import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesCreatePage } from './expenses-create.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensesCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesCreatePageRoutingModule {}
