import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { 
  AppRoutingModule, 
  rootRouterComponents,
  rootRouterGuards } from './app.routing.module';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { FooterHeaderComponent } from './footer-header/footer-header.component';

import { FarmaciaModule } from './farmacia/farmacia.module';
import { MedicamentoModule } from './medicamento/medicamento.module';
import { AlertaModule } from './alerta/alerta.module';

import { SearchItemService } from './search-item/search-item.service';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    FooterHeaderComponent,
    rootRouterComponents,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    ChartsModule,
    FarmaciaModule,
    MedicamentoModule,
    AlertaModule
  ],
  providers: [rootRouterGuards, SearchItemService],
  entryComponents: [ChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
