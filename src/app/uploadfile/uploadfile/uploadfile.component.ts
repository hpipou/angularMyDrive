import { HttpClient } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  token = ''

  file!: File;
  onChange(event: any) {this.file = event.target.files[0];}

  errorMsg!:any
  msgSuccess={ freeSpace : 0, usedSpace : 0}
  msgFailed ={ error : this.errorMsg}
  uploadSuccess=false
  uploadFailed=false

  envoyerUnfichier(){
    this.token = 'Bearer ' + localStorage.getItem('token')
    let options = {
      headers: {
        'Authorization': this.token
      }
    };

    const formData = new FormData();
    if(this.file){
      formData.append("file", this.file, this.file.name);

      this.http.post('http://localhost:3000/drive', formData, options).subscribe(
        (data:any)=>{
          this.msgSuccess = data
          console.log(this.msgSuccess)
          this.uploadSuccess=true
          this.uploadFailed=false


        },
        (err:any)=>{
          this.uploadSuccess=false
          this.uploadFailed=true
          this.msgFailed={ error : err.error.error}
        }
      )

    }else{
      this.uploadSuccess=false
      this.uploadFailed=true
      this.msgFailed = { error : "Sélectionnez une image"}
    }
  }

  refresh(): void {
    window.location.reload();
  }



}
