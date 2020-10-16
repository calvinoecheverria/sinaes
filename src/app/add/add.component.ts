import { Component, OnInit } from '@angular/core';
import { Posteo } from '../../models/posteo';
import { PosteoService } from '../../services/posteo.service';
import { UploadService } from '../../services/upload.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
    providers: [PosteoService, UploadService],
})
export class AddComponent implements OnInit {
    public title: String;
    public posteo: Posteo;
    public save_posteo;
        // si form no da success pasar a boolean
    public status: string;
    public filesToUpload: Array<File>;
    public url: string;

    
  constructor(
  private _PosteoService: PosteoService,
  private _uploadService: UploadService
      ){
      this.title = "Crear Posteo";
      this.posteo = new Posteo('','','','','',0 ,0 ,'','',2020 ,'','','');
      this.url = global.url;
  }
  ngOnInit(): void {
  }
onSubmit(form){
    //guardar los datos basicos
   // console.log(this.posteo);
    this._PosteoService.savePosteo(this.posteo).subscribe(
    response => {
        if(response.posteo){

                //subir la imagen
               if(this.filesToUpload){
                this._uploadService.makeFileRequest(global.url+"upload-image/"+response.posteo._id, [], this.filesToUpload, 'image')
                .then((result:any) => {
                    this.save_posteo = result.posteo;
                    this.status = 'succes';
                    form.reset();
                    

                });
           }else{
             this.save_posteo = response.posteo;
            this.status = 'succes';
            form.reset();
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
