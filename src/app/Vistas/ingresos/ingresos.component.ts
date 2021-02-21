import { Component, OnDestroy, OnInit } from '@angular/core';
import{Router} from '@angular/router';
//servicio
import { ServiTrackerService} from '../../Services/servi-tracker.service';
//modelos
import {Ingresos} from '../../Models/ingresos';
//transformar fecha
import { DatePipe } from '@angular/common';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit , OnDestroy {
//variable 
public ID:String;
public cuenta:String; 
public monto:String;
public fecha:String;
public descripcion:String;
public vista:String;
DateFormating:any;


  //array
 Misingresos:Ingresos[];

 //varibale paginacion
  public page:number=1;

     //subcripcion
     suscription:Subscription;

  constructor( private service:ServiTrackerService,private router:Router, public datepipe: DatePipe) { 
    
    this.obtenerIngresos();

  }

  ngOnInit():void {
    this.suscription=this.service.refresh$.subscribe(()=>{
      this.obtenerIngresos();
    })
  }
  
  ngOnDestroy():void{
    this.suscription.unsubscribe();
    console.log('Observable destroy  cerrado');
  }
  
  obtenerIngresos():void {
    this.service.getIngresosFronServer().subscribe(
      ingre=>{ this.Misingresos=ingre}
    )
  }

  onEliminar(id_Eliminar){
    console.log(id_Eliminar);
    this.service.deleteIngreso(id_Eliminar).subscribe(data=>{
      console.log("data delete");
      this.router.navigateByUrl('/vista/ingresos');
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
    console.log(this.monto)
    this.vista="ingresos"
   
  }

  trackByFn(index,item){
    //console.log(item._id,index)
    return item._id;
  }

  

}
