import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import { DividerModule } from "primeng/divider";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CardModule } from "primeng/card";
import {ClientService} from './services/client.service';
import { IncometaxComponent } from './incometax/incometax.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    IncometaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CarouselModule,
    ToastModule,
    CardModule,
    DividerModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
