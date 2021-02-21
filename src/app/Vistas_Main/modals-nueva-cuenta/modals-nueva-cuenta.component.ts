import { Component, OnInit ,ViewChild} from '@angular/core';
import{Router} from '@angular/router';
//modelo
import {Cuentas} from '../../Models/cuentas'
//servicio
import {ServiTrackerService} from '../../Services/servi-tracker.service';

@Component({
  selector: 'app-modals-nueva-cuenta',
  templateUrl: './modals-nueva-cuenta.component.html',
  styleUrls: ['./modals-nueva-cuenta.component.css']
})
export class ModalsNuevaCuentaComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  constructor(private service: ServiTrackerService,private router:Router) { }

  ngOnInit(): void {
  }
  saveCuenta(frmLogin):void{
    console.log(frmLogin.value);
    this.service.NuevaCuenta(frmLogin.value).subscribe(res=>{
      this.router.navigateByUrl('/vista/cuentas');
    });
  }

  public onclose() {
    this.closebutton.nativeElement.click();
    console.log("siiisis");
  }


}
