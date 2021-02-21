import { Component, OnDestroy, OnInit } from '@angular/core';
//servicio
import { ServiTrackerService} from '../../Services/servi-tracker.service';
//modelos
import {Gastos} from '../../Models/gastos';
//router 
import{Router} from '@angular/router';

//transformar fecha
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit, OnDestroy {

  //array
  Misgastos:Gastos[];
  
  //varibale paginacion
   public page:number=1;

   //variable 
   public ID:String;
   public cuenta:String;
   public monto:String;
   public fecha:String;
   public descripcion:String;
   public vista:String;
   DateFormating:any;

   //subcripcion
   suscription:Subscription;

  constructor( private service:ServiTrackerService,private router:Router,public datepipe: DatePipe) { 
   
  }

  ngOnInit(): void { 
    this.obtenerGastos();
    this.suscription=this.service.refresh$.subscribe(()=>{
      this.obtenerGastos();
    })
  }

  ngOnDestroy():void{
this.suscription.unsubscribe();
console.log('Observable destroy  cerrado');
  }
  
  obtenerGastos():void{
    this.service.getGastosFronServer().subscribe(
      gas=>{ this.Misgastos=gas}
    )
    
    }

    nuevoGsto(){
      console.log("hey oprimiste el btn")
    }

    onEliminar(id_Eliminar){
      console.log(id_Eliminar);
      this.service.deleteGasto(id_Eliminar).subscribe(data=>{
        console.log("data delete");
        this.router.navigateByUrl('/vista/gastos');
      })
  
    }

    onEditar(Id,Cuenta,Fecha,Monto,Descripcion){
      this.ID=Id;
      this.cuenta=Cuenta;
      this.monto=Monto;
      this.DateFormating = Fecha.trim().replaceAll('/','-');
      this.fecha=this.datepipe.transform(this.DateFormating, 'yyyy-MM-dd');
      this.fecha=this.DateFormating;
      //this.datepipe.transform(Fecha , 'dd/MM/yyyy'); //transformar fecha yyyy/MM/dd  MM/dd/yyyy  yyyy-MM-dd
      this.descripcion=Descripcion;
      console.log(this.fecha,"  ----> before "+Fecha + " dataF " +this.DateFormating)
       this.vista="gastos"
    }
   

}
