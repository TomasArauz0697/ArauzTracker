import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//servicios
import {ServiTrackerService} from './Services/servi-tracker.service';
import {HttpClientModule} from '@angular/common/http';
//navbar y sidebar 
import {SidebarComponent} from './Vistas_Main/sidebar/sidebar.component';
import {NavComponent} from './Vistas_Main/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [ServiTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
