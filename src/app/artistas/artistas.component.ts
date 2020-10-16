import { Component, OnInit } from '@angular/core';
import { Posteo } from '../../models/posteo';
import { PosteoService } from '../../services/posteo.service';
import { global } from '../../services/global';
import { UploadService } from '../../services/upload.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css'],
  providers: [PosteoService, UploadService]
})

export class ArtistasComponent implements OnInit {
    
//export class PosteosComponent implements OnInit {
  public posteos: Posteo[];
  public url: string;

  constructor(
    private _posteoService: PosteoService
    ) {this.url = global.url;
    }

  ngOnInit(){
          this.getPosteos();  
  }

    getPosteos(){
  	this._posteoService.getPosteos().subscribe(
  		response => {
  			if(response.posteos){
  				this.posteos = response.posteos;
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }


}
