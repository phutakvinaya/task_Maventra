import { Component } from '@angular/core';
import { GetdetailsService } from '../getdetails.service';

@Component({
  selector: 'app-sideright',
  standalone: false,
  
  templateUrl: './sideright.component.html',
  styleUrl: './sideright.component.css'
})
export class SiderightComponent {
  personname:any =''
  personrole: any;
  knownlanguages: any = [];
  progressValue:any = 0;
  remainders:any = [];
constructor(private getservice:GetdetailsService){

}
ngOnInit(){
  this.getstudentdetails();
}

getstudentdetails(){
  this.getservice.getcoursedata().subscribe((res) => {
    console.log(res);
    this.personname =  res['record']['users'][0]['userDetails'].name;
    this.personrole =  res['record']['users'][0]['userDetails'].role;

    this.knownlanguages = res['record']['users'][0]['userDetails'].knownLanguages;
    this.progressValue = res['record']['users'][0]['userDetails'].knownLanguages.percentage;
    this.remainders = res['record']['users'][0]['courseReminders'];
    console.log(this.knownlanguages)
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
