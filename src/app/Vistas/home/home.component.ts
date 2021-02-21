import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets,Chart } from 'chart.js';
//servicios
import {ServiTrackerService} from '../../Services/servi-tracker.service';
//modelo
import {usuarios} from '../../Models/user'
import {Cuentas} from '../../Models/cuentas'
import {Mrecientes} from '../../Models/mrecientes'

import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 
 MisUsuarios:usuarios[];
 MisCuentas:Cuentas[];
 MisMRecientes:Mrecientes[];
 
//chart
 public chart={};

//subcripcion
suscription:Subscription;
//first time
first:boolean=false;



constructor(private Service:ServiTrackerService) {
    this.getUsers_Service();
    this.getCuentas_Service(); 
    this.getCuentas_Service_FOR_chart(); 
    this.getMreciente_Service();   
}

ngOnInit(): void {

 this.suscription=this.Service.refresh$.subscribe(()=>{
   
    this.getCuentas_Service(); 
    this.getMreciente_Service(); 
  });
 
  
}


ngOnDestroy():void{
  this.suscription.unsubscribe();
  console.log('Observable destroy  cerrado');
}

   
getUsers_Service(): void {
    this.Service.getUsuarioALL()
    .subscribe(
      user => this.MisUsuarios =user  
      );
 }

getCuentas_Service():void{

  this.Service.getCuentas().subscribe( cuenta=>{
    this.MisCuentas=cuenta
  });
 
}

getCuentas_Service_FOR_chart():void{
  this.Service.getCuentas().subscribe( cuenta=>{
    const CuentasLabel:any[]=cuenta.map(cuenta=>cuenta.Name_cuenta);
    const CuentasMoney:any[]=cuenta.map(cuenta=>(cuenta.Dinero).trim().replace(',','.'));
    
    this.chart = new Chart('canvas',{
      type:'bar',
      data:{
        labels:CuentasLabel,
        datasets:[
          {data: CuentasMoney, label: 'Account ' ,
          backgroundColor:["#111B54", "#111B54", "#111B54", "#111B54", "#111B54","#111B54"],
          borderColor: ["#111B54", "#111B54","#111B54","#111B54", "#111B54","#111B54"],
          
          }
        ]
        
      },
      options:{
        responsive: true,
      }

    });
  });
}

getMreciente_Service(): void {
  this.Service.getMrecientes()
  .subscribe(
    MR=> this.MisMRecientes =MR
    );
}

}










/**  //charts 
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  chartColors: any[] = [
                        { 
                          backgroundColor:["#111B54", "#111B54", "#111B54", "#111B54", "#111B54","#111B54"],
                          borderColor: ["#111B54", "#111B54","#111B54","#111B54", "#111B54","#111B54"],
                          borderWidth : "1.5", hoverBorderColor : "#3df83d",
      
                        }];


  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ]; */