import { Component, OnInit } from '@angular/core';
import { Posteo } from '../../models/posteo';
import { PosteoService } from '../../services/posteo.service';
import { global } from '../../services/global';
import { UploadService } from '../../services/upload.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrls: ['./posteos.component.css'],
  providers: [PosteoService, UploadService]
})
export class PosteosComponent implements OnInit {
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

