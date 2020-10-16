import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

//desde aca agregue de mas
import { Component, OnInit } from '@angular/core';
import { Posteo } from '../../models/posteo';
import { PosteoService } from '../../services/posteo.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AddComponent } from './add/add.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { ErrorComponent } from './error/error.component';
import { PosteosComponent } from './posteos/posteos.component';
import { PosteoComponent } from './posteo/posteo.component';
import { EditComponent } from './edit/edit.component';

//Hash location
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AddComponent,
    ArtistasComponent,
    ErrorComponent,
    PosteosComponent,
    PosteoComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders, 
              //{provide: LocationStrategy, useClass: HashLocationStrategy}
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
