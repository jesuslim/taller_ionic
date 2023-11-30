import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private readonly gastosKey = 'gastos';
  gastos: any = [];

  constructor() { }

  obtenerGastosLocalStorage(): any[] {
    const gastosGuardados = localStorage.getItem(this.gastosKey);
    this.gastos = gastosGuardados
    return gastosGuardados ? JSON.parse(gastosGuardados) : [];
  }

  guardarGastosLocalStorage(gastos: any[]): void {
    localStorage.setItem(this.gastosKey, JSON.stringify(gastos));
  }

  agregarGasto(gasto: any): void {
    const gastosGuardados = this.obtenerGastosLocalStorage();
    gastosGuardados.push({ ...gasto });
    this.guardarGastosLocalStorage(gastosGuardados);
  }

}
