import { Component, OnInit } from '@angular/core';
import { MydriveServiceService } from 'src/app/service/mydrive-service.service';
import { zip } from 'rxjs';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-mydrive',
  templateUrl: './mydrive.component.html',
  styleUrls: ['./mydrive.component.css']
})
export class MydriveComponent implements OnInit {

  transform(value: string): string {
    const fileParts = value.split('.');
    return fileParts.pop()!;
  }

  totalSize=0
  pourcentage=0
  fileName = []
  nombreFichier = 0
  sizeFile = []
  combinedItems = zip(this.fileName, this.sizeFile);

  naiveRound(num: any, decimalPlaces = 2) {
    var p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
  }

  constructor(private DriveService: MydriveServiceService) { }

  ngOnInit(): void {
    this.DriveService.getAllFileList().subscribe(
      (data)=>{
        this.totalSize = this.naiveRound(data.totalSize)
        this.fileName = data.fileName
        this.sizeFile = data.sizeFile
        this.nombreFichier = data.fileName.length
        this.pourcentage = this.naiveRound((data.totalSize/10)*100)
        this.combinedItems = zip(data.fileName, data.sizeFile);
      },
      (error)=>{console.log(error)}
    ).unsubscribe
  }


  downFile(nameFile:any){
      this.DriveService.getOneFile(nameFile).subscribe(
        (blob: Blob)=>{
          saveAs(blob, nameFile);
        },
        (error)=>{
          console.log(error)
        }
      ).unsubscribe
  }

  //////////////////////////////////////////
  // boutton supprimer un fichier
  //////////////////////////////////////////

  deleteFile(fileName:any, fileSize:any){
    this.DriveService.deleteOneFile(fileName).subscribe(
      (data)=>{
        this.fileName = this.fileName.filter(item => item !== fileName)
        this.sizeFile = this.sizeFile.filter(item => item !== fileSize)
        this.totalSize = data.usedSpace
        this.nombreFichier = this.fileName.length
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    ).unsubscribe
  }

}
