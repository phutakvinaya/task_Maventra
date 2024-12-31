import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetdetailsService } from '../getdetails.service';

@Component({
  selector: 'app-main',
  standalone: false,
  
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit,AfterViewInit{
  courses:any = [];
  percent:number = 0;
  percentagevalue: number = 0;
  name: any;
  createdate: any;
  learningtimemonday:any;
  learningtimetus:any;
  learningtimewed:any;
  learningtimethurs:any;
  learningtimefri:any;
  learningtimesat:any;
  learningtimesun:any;

  @ViewChild("progressBar", { static: true }) progressBar!:ElementRef;
constructor(private getservice:GetdetailsService){
  this.getdata()
}
ngOnInit(){
}

ngAfterViewInit(){
  debugger
  this.getservice.getcoursedata().subscribe((res) => {
    // console.log(res);
    const percentarray = res['record']['users'][0]['latestResults'];
    const monday =res['record']['users'][0]['learningTime']['weekly']['Monday']
    this.learningtimemonday = [monday]
    const tues =res['record']['users'][0]['learningTime']['weekly']['Tuesday'];
    this.learningtimetus = [tues]
    const wed =res['record']['users'][0]['learningTime']['weekly']['Wednesday']
    this.learningtimewed=[wed]
    const thur =res['record']['users'][0]['learningTime']['weekly']['Thursday'];
    this.learningtimethurs =[thur]
    const fri =res['record']['users'][0]['learningTime']['weekly']['Friday']
    this.learningtimefri=[fri]
    const sat =res['record']['users'][0]['learningTime']['weekly']['Saturday']
    this.learningtimesat =[sat]
    const sunday =res['record']['users'][0]['learningTime']['weekly']['Sunday']
    this.learningtimesun = [sunday]

    // this.progressBar.nativeElement.style.width = this.percent+"%";

   })
  
}
getdata(){
 this.getservice.getcoursedata().subscribe((res) => {
  // console.log(res);
  this.courses = res['record']['users'][0]['latestResults'];
  const nameapi = res['metadata']['name'];
  this.name =nameapi[0].toUpperCase() + nameapi.substr(1).toLowerCase();
  this.createdate = res['metadata']['createdAt'];
 })
}

getProgressClass(percentage: number): string {
    if (percentage >= 70) {
      return 'high';
    } else if (percentage >= 40) {
      return 'medium';
    } else {
      return 'low';
    }
  }
}
