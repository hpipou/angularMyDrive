import { Component, OnInit } from '@angular/core';
import { MydriveServiceService } from 'src/app/service/mydrive-service.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private DriveService: MydriveServiceService) { }

  username = localStorage.getItem('username')
  role = localStorage.getItem('role')

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

}
