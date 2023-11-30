import { Component, OnInit } from '@angular/core';
import { GastosService } from "../services/gastos.service";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {

  gastos: any = [];
  limiteCredito: number = environment.LIMITE_CREDITO;
  nuevoLimite: any = '';

  constructor(private gastosServices: GastosService) { }

  ngOnInit() {
    this.getGastos()
  }

  getGastos() {
    this.gastos = this.gastosServices.obtenerGastosLocalStorage();

    const sumaGastos = this.gastos.reduce((total: any, gasto: any) => total + gasto.gasto, 0);
    this.nuevoLimite = this.limiteCredito - sumaGastos;

    console.log('gastos', this.gastos, this.nuevoLimite);
  }

  clearList() {
    localStorage.removeItem("gastos");
    this.gastos = this.gastosServices.obtenerGastosLocalStorage();
    this.nuevoLimite = this.limiteCredito;
  }

}
