import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GastosComponent } from './gastos/gastos.component';
import { HomeComponent } from './home/home.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import {CuentasComponent} from './cuentas/cuentas.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'ingresos', component: IngresosComponent },
  { path: 'cuentas', component: CuentasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistasRoutingModule { }
