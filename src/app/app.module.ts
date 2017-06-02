import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { FooterHeaderComponent } from './footer-header/footer-header.component';

import { 
  AppRoutingModule, 
  rootRouterComponents,
  rootRouterGuards } from './app.routing.module';

import { FarmaciaModule } from './farmacia/farmacia.module';
import { MedicamentoModule } from './medicamento/medicamento.module';
import { AlertaModule } from './alerta/alerta.module';

import { SearchItemService } from './search-item/search-item.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    FooterHeaderComponent,
    rootRouterComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    FarmaciaModule,
    MedicamentoModule,
    AlertaModule
  ],
  providers: [rootRouterGuards, SearchItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
