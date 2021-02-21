import { Component, OnInit,ViewChild  } from '@angular/core';
import{Router} from '@angular/router';

//modelo
import {Cuentas} from '../../Models/cuentas'
//servicio
import {ServiTrackerService} from '../../Services/servi-tracker.service';

@Component({
  selector: 'app-modal-gastos',
  templateUrl: './modal-gastos.component.html',
  styleUrls: ['./modal-gastos.component.css']
})

export class ModalGastosComponent implements OnInit {
  MisCuentas:Cuentas[];
  @ViewChild('myModalClose') modalClose;
  constructor( private service: ServiTrackerService,private router:Router) {
    this.getCuentas_Service();
   
   }

  ngOnInit(): void {
  }
  getCuentas_Service():void{

    this.service.getCuentas().subscribe( cuenta=>{
      this.MisCuentas=cuenta
      console.log(cuenta)
    }) 
  }

  onRegistrarGastos(){
    console.log("registro listo exitoso");
  }

  onLogin(form):void{
     console.log('click en login sjsjssj',form.value);
     this.service.NuevoGasto(form.value).subscribe(res=>{
      this.router.navigateByUrl('/vista/Home');
      this.modalClose.nativeElement.click();
    
    });
      
     
  }

  

}
