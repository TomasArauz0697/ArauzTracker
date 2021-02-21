import { Component, Input, OnInit ,ViewChild} from '@angular/core';

//servicio
import { ServiTrackerService} from '../../Services/servi-tracker.service';



@Component({
  selector: 'app-modal-editar-i-g',
  templateUrl: './modal-editar-i-g.component.html',
  styleUrls: ['./modal-editar-i-g.component.css']
})
export class ModalEditarIGComponent implements OnInit {
  @ViewChild('closebutton') closebutton;

  @Input() ID:String="";
  @Input() Cuenta:String="";
  @Input() Fecha:String="";
  @Input() Monto:String="";
  @Input() Descripcion:String="";
  @Input() vista:String="";
  
  alertaError:Boolean=false;
  alertSuccess:Boolean=false;
  
  constructor(private service:ServiTrackerService) { }

  ngOnInit(): void {
  }

  onSaveEdit(frm):void{
  if(!frm.value.cuenta || !frm.value.Monto || !frm.value.fecha || !frm.value.detalle){
    console.log('verifique los datos vacios')
    this.alertaError=true;
  }else{
    console.log('datos listos corectos',this.vista);
    if(this.vista=="gastos"){
        this.service.updateGastos(this.ID,frm.value).subscribe(data=>{
            console.log("data gastos  update");
            this.alertSuccess=true;
           // this.router.navigateByUrl('/vista/gastos');
          })
    }else{
      this.service.updateIngresos(this.ID,frm.value).subscribe(data=>{
        console.log("data ingresos update");
        //this.router.navigateByUrl('/vista/gastos');
        this.alertSuccess=true;
      })
    }
    
    this.alertaError=false;

  }
    console.log(frm.value)
    console.log(this.ID)
  }

  public onclose() {
    this.closebutton.nativeElement.click();
    console.log("siiisis");
  }


}
