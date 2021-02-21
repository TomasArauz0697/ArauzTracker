import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/vista/Home', pathMatch: 'full' },
  { path: 'vista', loadChildren: () => import('./Vistas/vistas.module').then(m => m.VistasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  