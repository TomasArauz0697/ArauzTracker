import { Component,Input, OnInit ,ViewChild} from '@angular/core';
//servicio
import { ServiTrackerService} from '../../Services/servi-tracker.service';



@Component({
  selector: 'app-modal-editar-cuenta',
  templateUrl: './modal-editar-cuenta.component.html',
  styleUrls: ['./modal-editar-cuenta.component.css']
})
export class ModalEditarCuentaComponent implements OnInit {
  @ViewChild('closebutton') closebutton;

  @Input() ID:String="";
  @Input() Cuenta:String="";
  @Input() Monto:String="";

  constructor(private service:ServiTrackerService) { }

  ngOnInit(): void {
 
  }

  saveCuentaEdita(frm){
    console.log("jdkdkdkkdk",frm.value)
    if(!frm.value.cuenta || !frm.value.Monto){
      console.log('verifique los datos vacios')
    }else{
      console.log('datos correctos')
      this.service.updateCuenta(this.ID,frm.value).subscribe(data=>{
        console.log("data gastos  update");
       // this.router.navigateByUrl('/vista/gastos');
      })
    }
  }
  onclose(){
    this.closebutton.nativeElement.click();
  }

}
