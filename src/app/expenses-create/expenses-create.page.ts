import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GastosService } from "../services/gastos.service";
import { ToastController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses-create',
  templateUrl: './expenses-create.page.html',
  styleUrls: ['./expenses-create.page.scss'],
})
export class ExpensesCreatePage implements OnInit {

  expenseForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public gastosService: GastosService,
    public toastController: ToastController,
    public router: Router
  ) {
    this.expenseForm = this.formBuilder.group(
      {
        'ID': new FormControl(''),
        'descripcion': new FormControl(''),
        'gasto': new FormControl(''),
      }
    )
  }

  ngOnInit() {
  }

  async guardarGasto(data: any) {
    console.log(data);
    this.gastosService.agregarGasto(data)

    const toast = await this.toastController.create({
      message: 'Gasto guardado!',
      duration: 1500,
      position: 'middle',
    });

    await toast.present().then(() => {
      this.router.navigate(['expenses'])
    });

  }
}
