import { Component, OnInit,Input,ViewChild} from '@angular/core';

//modelo
import {Cuentas} from '../../Models/cuentas'
//servicio
import {ServiTrackerService} from '../../Services/servi-tracker.service';


@Component({
  selector: 'app-modal-transferencia',
  templateUrl: './modal-transferencia.component.html',
  styleUrls: ['./modal-transferencia.component.css']
})
export class ModalTransferenciaComponent implements OnInit {
  @Input() ID:String="";
  @Input() Cuenta:String="";
  @Input() Monto:String="";
  @ViewChild('closebutton') closebutton;
  MisCuentas:Cuentas[];

  constructor(private service: ServiTrackerService) {  }

  ngOnInit(): void {
    this.getCuentas_Service();
  }
  onclose(){
    this.closebutton.nativeElement.click();
  }
  transferir(frm){
    console.log("transferir",frm.value)
  
  }
  getCuentas_Service():void{

    this.service.getCuentas().subscribe( cuenta=>{
      this.MisCuentas=cuenta
      console.log(cuenta)
    }) 
  }

}
