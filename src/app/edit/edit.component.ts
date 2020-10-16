import { Component, OnInit } from '@angular/core';
import { Posteo } from '../../models/posteo';
import { PosteoService } from '../../services/posteo.service';
import { UploadService } from '../../services/upload.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['./edit.component.css'],
    providers: [PosteoService, UploadService],
})
export class EditComponent implements OnInit {
     public title: String;
    public posteo: Posteo;
    public save_posteo;
        // si form no da success pasar a boolean
    public status: string;
    public filesToUpload: Array<File>;
    public url: string;

    
  constructor(
  private _uploadService: UploadService,
   private _posteoService: PosteoService,
  	private _router: Router,
  	private _route: ActivatedRoute
      ){
      this.title = "Editar Posteo";
      this.url = global.url;
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
    onSubmit(){
  	this._posteoService.updatePosteo(this.posteo).subscribe(
  		response => {
            if(response.posteo){
  			
                //subir la imagen
                if(this.filesToUpload){
                this._uploadService.makeFileRequest(global.url+"upload-image/"+response.posteo._id, [], this.filesToUpload, 'image')
                .then((result:any) => {
                    this.save_posteo = result.posteo;
                    this.status = 'succes';
//                    form.reset();
                    

                });
            }else{
                this.save_posteo = response.posteo;
                this.status = 'succes';
//                form.reset();
//            }
//                });
            }
        }else{
            this.status = 'failed';
        }
  },
                      error => {
                     console.log(<any>error); 
                      } 
            );
}
        fieChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}
       