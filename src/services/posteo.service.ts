import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Posteo } from '../models/posteo';
import { global } from './global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Injectable ()
export class PosteoService{
    public url: string;
    
    constructor (
    private _http: HttpClient
    ){
        this.url = global.url;
    }
    testService(){
        return 'Probando servicio Angular';
    }
    savePosteo(posteo: Posteo): Observable<any>{
        let params = JSON.stringify(posteo);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.post(this.url+'save-posteo', params, {headers: headers});
    }
    getPosteos(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // aca la ruta donde lista posteos
		return this._http.get(this.url+'posteos', {headers: headers});
	}

   
	getPosteo(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'posteo/'+id, {headers: headers});
	}

	deletePosteo(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'posteo/'+id, {headers: headers});
	}

	updatePosteo(posteo): Observable<any>{
		let params = JSON.stringify(posteo);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');


		return this._http.put(this.url+'posteo/'+posteo._id, params, {headers: headers});
	}
}

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private http: HttpClient) { }

  getAPIData(){
    return this.http.get('https://localhost:3700/api')
  }
}


