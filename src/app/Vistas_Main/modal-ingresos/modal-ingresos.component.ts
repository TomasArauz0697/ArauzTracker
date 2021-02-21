import { Component, OnInit,ViewChild  } from '@angular/core';
import{Router} from '@angular/router';

//modelo
import {Cuentas} from '../../Models/cuentas'
//servicio
import {ServiTrackerService} from '../../Services/servi-tracker.service';

@Component({
  selector: 'app-modal-ingresos',
  templateUrl: './modal-ingresos.component.html',
  styleUrls: ['./modal-ingresos.component.css']
})
export class ModalIngresosComponent implements OnInit {
  MisCuentas:Cuentas[];
  @ViewChild('myModalClose') modalClose;

  constructor(private service: ServiTrackerService,private router:Router) {
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

  onLogin(form):void{
    console.log('click en ingresos',form.value);
    this.service.NuevoIngreso(form.value).subscribe(res=>{
     this.router.navigateByUrl('/vista/ingresos');
     this.modalClose.nativeElement.click();
   });
     
    
 }

}
