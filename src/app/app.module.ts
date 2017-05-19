import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsTemplateModule } from './forms-template/forms-template.module';
import { FooterHeaderComponent } from './footer-header/footer-header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    AuthenticationComponent,
    PaginationComponent,
    FooterHeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FormsTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
