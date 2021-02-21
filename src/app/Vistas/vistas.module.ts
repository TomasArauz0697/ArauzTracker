import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {VistasRoutingModule} from './vistas-routing.module';

//vistas principales
import { IngresosComponent } from './ingresos/ingresos.component';
import { GastosComponent } from './gastos/gastos.component';
import { CuentasComponent } from './cuentas/cuentas.component';
// vistas modales para crear nuevo ingresos o gastos 
import { ModalGastosComponent } from '../Vistas_Main/modal-gastos/modal-gastos.component';
import { ModalIngresosComponent } from '../Vistas_Main/modal-ingresos/modal-ingresos.component';
import { ModalEditarIGComponent } from '../Vistas_Main/modal-editar-i-g/modal-editar-i-g.component';
import { ModalsNuevaCuentaComponent } from '../Vistas_Main/modals-nueva-cuenta/modals-nueva-cuenta.component';
import { ModalEditarCuentaComponent } from '../Vistas_Main/modal-editar-cuenta/modal-editar-cuenta.component';
import { ModalTransferenciaComponent } from '../Vistas_Main/modal-transferencia/modal-transferencia.component';


import { ChartsModule } from 'ng2-charts';

//forms
import {FormsModule} from '@angular/forms'

//paginacion 
import {NgxPaginationModule} from 'ngx-pagination'; 

//fecha
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
      HomeComponent, 
      IngresosComponent,
      GastosComponent,
      ModalGastosComponent,
      ModalIngresosComponent,
      ModalEditarIGComponent,
      CuentasComponent,
      ModalsNuevaCuentaComponent,
      ModalEditarCuentaComponent,
      ModalTransferenciaComponent],
  imports: [
    CommonModule,
    VistasRoutingModule,
     ChartsModule ,
     NgxPaginationModule,
     FormsModule,
     

  ],
  providers: [DatePipe]
})
export class VistasModule { }
