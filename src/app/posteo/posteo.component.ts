import { Component, OnInit } from '@angular/core';
import { Posteo } from '../../models/posteo';
import { PosteoService } from '../../services/posteo.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-posteo',
  templateUrl: './posteo.component.html',
  styleUrls: ['./posteo.component.css'],
  providers: [PosteoService]
})
export class PosteoComponent implements OnInit {
    public posteo: Posteo;
      public url: string;
  public confirm: boolean;


  constructor(
	private _posteoService: PosteoService,
  	private _router: Router,
  	private _route: ActivatedRoute
) {
    this.url = global.url;
    this.confirm = false;

}

  ngOnInit(){
      this._route.params.subscribe(params => {
  		let id = params.id;

  		this.getPosteo(id);
  });
   	}

  getPosteo(id){
  	this._posteoService.getPosteo(id).subscribe(
  		response => {
  			this.posteo = response.posteo;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deletePosteo(id){
  	this._posteoService.deletePosteo(id).subscribe(
  		response => {
  			if(response.posteo){
  				this._router.navigate(['/posteos']);
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

}

