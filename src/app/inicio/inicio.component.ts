import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
    public title: string;
    public subtitle: string;
    public email: string;

  constructor() {
  this.title = "sinaesthesis";
  this.subtitle = "todo el arte contemporaneo sin anestesia";
  this.email = "contact@sinaesthesis.net";

  }

  ngOnInit(): void {
  }

}
