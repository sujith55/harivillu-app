import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './router/app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutsComponent } from './components/home/layouts/layouts.component';
import { LayoutsService } from './services/layouts.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/home/layout/layout.component';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LayoutsComponent,
    LayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LayoutsService,
    CommonService
    // AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
