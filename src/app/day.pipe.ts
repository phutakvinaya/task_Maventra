import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day',
  standalone: false
})
export class DayPipe implements PipeTransform {
   listOfDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  transform(value: any, ...args: unknown[]): any {
    debugger
    const date = new Date(value)
    var numberofday = date.getDay();
    var day = this.listOfDays[numberofday];
    return  day;
  }

}
