import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {UsuarioI} from '../Models/usuario';
import {tap,catchError,map} from 'rxjs/operators';
import {Observable, BehaviorSubject,of,Subject} from 'rxjs'

//Models
import { usuarios } from '../Models/user';
import {Cuentas} from '../Models/cuentas';
import {Mrecientes} from '../Models/mrecientes';
import {Ingresos} from '../Models/ingresos';
import {Gastos} from '../Models/gastos';


@Injectable({
  providedIn: 'root'
})
export class ServiTrackerService {

  AUTH_SERVICE: string = 'http://localhost:3000';
  authSubject= new BehaviorSubject(false);
  private token:string;

  private _refresh$= new BehaviorSubject<void>(null);
  


  constructor( private httpClient:HttpClient) {
   // console.log("funcionando servicio");
   }

   get refresh$(){
    return this._refresh$;
   }



  /** GET user from the server */
  getUsuarioALL(): Observable<usuarios[]> {
    return this.httpClient.get<usuarios[]>(`${this.AUTH_SERVICE}/user`)
      .pipe(
        tap(_ => console.log('Datos usuarios listo-Servicio'))
      );
  }


  /** GET cuentas from the server */
  getCuentas(): Observable<Cuentas[]> {
    return this.httpClient.get<Cuentas[]>(`${this.AUTH_SERVICE}/cuenta`)
      .pipe(
        
        tap(//_ => console.log('Datos Cuentas listo-Servicio')
        ()=>{this.refresh$.next();})
      );
  }

  /** GET Cuentas recientes from the server */
  getMrecientes(): Observable<Mrecientes[]> {
    return this.httpClient.get<Mrecientes[]>(`${this.AUTH_SERVICE}/recientes`)
      .pipe(
        tap(/*_ => console.log('Datos Cuentas recientes listo-Servicio'*/
        ()=>{this.refresh$.next(); }
        )
      );
  }

  /**get Ingresos from server */

  getIngresosFronServer():Observable<Ingresos[]>{
    return this.httpClient.get<Ingresos[]>(`${this.AUTH_SERVICE}/Ingresos`).pipe
    ( tap(/*_=> console.log('Datos ingresos listos-servicio')*/
    ()=>{this.refresh$.next(); console.log("jajajaja");}
          
    ))
  }

   /**get Gastso from server */

   getGastosFronServer():Observable<Gastos[]>{
    return this.httpClient.get<Gastos[]>(`${this.AUTH_SERVICE}/gastos`).pipe
    ( tap(/*_=> console.log('Datos gastos listos-servicio')*/
    ()=>{this.refresh$.next();}
    ))
  }





  
/**Guardar nuevo gastos */

NuevoGasto(Gstos:Gastos):Observable<Gastos>{
  return this.httpClient.post<Gastos>(`${this.AUTH_SERVICE}/savegasto`,
    Gstos).pipe(tap(
      (res:Gastos)=> {
        if(res){
          console.log('datos guardados')
        }
      })
    );
}

/**Guardar nuevo ingreso */

NuevoIngreso(Ingre:Ingresos):Observable<Ingresos>{
  return this.httpClient.post<Ingresos>(`${this.AUTH_SERVICE}/saveIngresos`,
  Ingre).pipe(tap(
      (res:Ingresos)=> {
        if(res){
          console.log('datos ingresos guardados')
        }
      })
    );
}


deleteIngreso(id: number): Observable<{}> {
  const url = `${this.AUTH_SERVICE}/deleteIngreso/${id}`; 
  return this.httpClient.delete(url)
    .pipe();
    
}


deleteGasto(id: number): Observable<{}> {
  const url = `${this.AUTH_SERVICE}/deleteGasto/${id}`; 
  return this.httpClient.delete(url)
    .pipe();
    
}

updateGastos(id, data): Observable<any> {
  return this.httpClient.put(`${this.AUTH_SERVICE}/gastosUpdate/${id}`, data);
}

updateIngresos(id, data): Observable<any> {
  return this.httpClient.put(`${this.AUTH_SERVICE}/ingresosUpdate/${id}`, data);
}

/**Guardar nuevo gastos */

NuevaCuenta(cts:Cuentas):Observable<Cuentas>{
  return this.httpClient.post<Cuentas>(`${this.AUTH_SERVICE}/saveCuentas`,
    cts).pipe(tap(
      (res:Cuentas)=> {
        if(res){
          console.log('datos cuentas guardados')
        }
      })
    );
}

//delte cuenta

deleteCuenta(id: number): Observable<{}> {
  const url = `${this.AUTH_SERVICE}/deleteCuenta/${id}`; 
  return this.httpClient.delete(url)
    .pipe();
    
}

//update cuentas

updateCuenta(id, data): Observable<any> {
  return this.httpClient.put(`${this.AUTH_SERVICE}/CuentasUpdate/${id}`, data);
}


}
