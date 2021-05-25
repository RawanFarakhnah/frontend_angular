import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpEventType } from '@angular/common/http';
import { UplodeFileService } from './services/uplode-file.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  selectedFile:any ;

  constructor(private http:HttpClient ,private uplodeFileService:UplodeFileService) { }

  onFileSelected(event: any){
    this.selectedFile= <File> event.target.files[0];
  }

  getfileTableContant (){
    return this.uplodeFileService.getfileTableContant().subscribe(res =>{
      console.log(res);
    });
  }

  onUpload (){
    const formData= new FormData();
    formData.append('file',this.selectedFile,this.selectedFile.name);
  
    return this.uplodeFileService.InsertfileTableContant(formData)
    .subscribe(res =>{
      console.log(res);
      alert('Uploaded Successfully.');
    });
  }
  
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this.http.post('http://127.0.0.1:8000/file-upload', formData, {
        reportProgress: true,
        observe: 'events'  
    })
    .subscribe(events => {
        if(events.type == HttpEventType.UploadProgress) {
            console.log('Upload progress: ', Math.round(events.loaded * 100) + '%');
            alert('Uploaded Successfully.');
          } else if(events.type === HttpEventType.Response) {
            console.log(events);
        }
    })
}



}
