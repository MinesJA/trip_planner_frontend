const VACATION = 'VACATION';
const HOLIDAY = 'HOLIDAY';
const REGULAR = 'REGULAR';

export class DayObject{

  constructor(date, type, tripID) {
    this.date = date;
    this.type = type;
    this.tripID = tripID;
  }

  setType(type){
    if(type =)
    this.type = type
  }

}

let holidays = [

]

let holidays = {
  2020: [
    new Date(2020, 1, 1),
    new Date(2020, 1, 1),
  ]
}


Holiday	2019	2020	2021
New Years Day January 1
Martin Luther King, Jr. Day January 20
Washington's Birthday February 17
Good Friday	April 10
Memorial Day May 25
Independence Day July 3
Labor Day	September 7
Thanksgiving Day November 26
Christmas	December 25

function getDaysInMonth(month, year, holidays) {
     var date = new Date(Date.UTC(year, month, 1));
     var dayObjs = [];
     while (date.getMonth() === month) {
        let newDate = new Date(date);
        new DayObject(newDate, )

        days.push();
        date.setDate(date.getDate() + 1);

     }
     return days;
}

function createCalendarYear(year, holidays){
  for(let i = 1; i <= 12; i++){
    getDaysInMonth(i, year, )
  }
}
