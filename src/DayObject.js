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
    // Will need to establish rules on which types can switch
    // switch(type) {
    //   case VACATION:
    //     // code block
    //     break;
    //   case HOLIDAY:
    //
    //     break;
    //   case REGULAR:
    //     // code block
    //     break;
    //   default:
    // }

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
