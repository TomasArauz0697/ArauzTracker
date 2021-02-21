import { Component, OnDestroy, OnInit } from '@angular/core';
//servicios
import {ServiTrackerService} from '../../Services/servi-tracker.service';
//modelo
import {Cuentas} from '../../Models/cuentas'
//rxjs
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit, OnDestroy {
  MisCuentas:Cuentas[];

public ID:String;
public cuenta:String; 
public monto:String;

//subcripcion
suscription:Subscription;
  constructor(private Service:ServiTrackerService) {      this.getCuentas_Service();  }

  ngOnInit(): void {
    this.suscription=this.Service.refresh$.subscribe(()=>{
   
    //  this.getCuentas_Service(); 
    });

  }
  ngOnDestroy():void{
    this.suscription.unsubscribe();
    console.log('Observable destroy  cerrado');
  }

  getCuentas_Service():void{

    this.Service.getCuentas().subscribe( cuenta=>{
      this.MisCuentas=cuenta
      console.log(this.MisCuentas)
    });
   
  }

  onDelete(id):void{
   // console.log('delete id',id);
    this.Service.deleteCuenta(id).subscribe(data=>{
      console.log("cuenta delete");
     // this.router.navigateByUrl('/vista/ingresos');
    })
  }

  onEditar(Id,Cuenta,Monto){
    this.ID=Id;
    this.cuenta=Cuenta;
    this.monto=Monto;
    console.log("desde ediatar cuenta jaja", this.monto, this.ID,this.cuenta)
   
  }

  onTrasfer(Id,Cuenta,Monto){
    this.ID=Id;
    this.cuenta=Cuenta;
    this.monto=Monto;
    console.log("desde transferir cts", this.monto, this.ID,this.cuenta)
   
  }
  



}
