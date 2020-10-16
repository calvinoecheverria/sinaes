import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//desde aca agregue de mas
import { Component, OnInit } from '@angular/core';
import { Posteo } from '../../models/posteo';
import { PosteoService } from '../../services/posteo.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';



//import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AddComponent } from './add/add.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { PosteosComponent } from './posteos/posteos.component';
import { PosteoComponent } from './posteo/posteo.component';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';


const appRoutes: Routes = [
    
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'artistas', component: ArtistasComponent},
    {path: 'add', component: AddComponent},
    {path: 'posteos', component: PosteosComponent},
    {path: 'posteo/:id', component: PosteoComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: '**', component: ErrorComponent},
    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

//Desde aqui copie para resolver error
declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}