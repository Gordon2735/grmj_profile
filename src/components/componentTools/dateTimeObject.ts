'use strict';

// Create a date object and return a string of the date and time with month, day, year;
//  also with hour, minute, and second with am/pm

class dateTimeObject {
    dateObject: Date = new Date();
    convertedDate: string = this.dateObject.toDateString();
    convertedTime: string = this.dateObject.toLocaleTimeString();
    chopOffDay: string[] = this.convertedDate.split(' ', 1);
    chopOffMonth: string[] = this.convertedDate.split(' ', 2);
    chopOffDayOfMonth: string[] = this.convertedDate.split(' ', 3);
    chopOffYear: string[] = this.convertedDate.split(' ', 4);

    constructor() {
        this.dateObject = new Date();
        this.convertedDate = this.dateObject.toDateString();
        this.convertedTime = this.dateObject.toLocaleTimeString([], {
            timeStyle: 'short'
        });
        this.chopOffDay = this.convertedDate.split(' ', 1);
        this.chopOffMonth = this.convertedDate.split(' ', 2);
        this.chopOffDayOfMonth = this.convertedDate.split(' ', 3);
        this.chopOffYear = this.convertedDate.split(' ', 4);
    }

    public day = '';

    public getDayOfWeek(day: string): string | void {
        this.day = day;
        switch (this.chopOffDay[0]) {
            case 'Sun': {
                this.day = 'Sunday';
                console.log(`SUNDAY: ${this.day}`);
                break;
            }
            case 'Mon': {
                this.day = 'Monday';
                console.log(`MONDAY: ${this.day}`);
                break;
            }
            case 'Tue': {
                this.day = 'Tuesday';
                console.log(`TUESDAY: ${this.day}`);
                break;
            }
            case 'Wed': {
                this.day = 'Wednesday';
                console.log(`WEDNESDAY: ${this.day}`);
                break;
            }
            case 'Thu': {
                this.day = 'Thursday';
                console.log(`THURSDAY: ${this.day}`);
                break;
            }
            case 'Fri': {
                this.day = 'Friday';
                console.log(`FRIDAY: ${this.day}`);
                break;
            }
            case 'Sat': {
                this.day = 'Saturday';
                console.log(`SATURDAY: ${this.day}`);
                break;
            }
            default:
                console.log('ERROR: No this.day of the week found.');
                break;
        }
        return this.day;
    }

    public month = '';

    public getMonthOfYear(month: string): string | void {
        this.month = month;
        switch (this.chopOffMonth[1]) {
            case 'Jan': {
                this.month = 'January';
                console.log(`JANUARY: ${this.month}`);
                break;
            }
            case 'Feb': {
                this.month = 'February';
                console.log(`FEBRUARY: ${this.month}`);
                console.log(this.chopOffDayOfMonth[2]);
                break;
            }
            case 'Mar': {
                this.month = 'March';
                console.log(`MARCH: ${this.month}`);
                break;
            }
            case 'Apr': {
                this.month = 'April';
                console.log(`APRIL: ${this.month}`);
                break;
            }
            case 'May': {
                this.month = 'May';
                console.log(`MAY: ${this.month}`);
                break;
            }
            case 'Jun': {
                this.month = 'June';
                console.log(`JUNE: ${this.month}`);
                break;
            }
            case 'Jul': {
                this.month = 'July';
                console.log(`JULY: ${this.month}`);
                break;
            }
            case 'Aug': {
                this.month = 'August';
                console.log(`AUGUST: ${this.month}`);
                break;
            }
            case 'Sep': {
                this.month = 'September';
                console.log(`SEPTEMBER: ${this.month}`);
                break;
            }
            case 'Oct': {
                this.month = 'October';
                console.log(`OCTOBER: ${this.month}`);
                break;
            }
            case 'Nov': {
                this.month = 'November';
                console.log(`NOVEMBER: ${this.month}`);
                break;
            }
            case 'Dec': {
                this.month = 'December';
                console.log(`DECEMBER: ${this.month}`);
                break;
            }
            default:
                console.log(this.chopOffMonth[1]);
                break;
        }
        return this.month;
    }

    public dayOfMonth = '';

    public getDayOfMonth(dayOfMonth: string): string | void {
        this.dayOfMonth = dayOfMonth;
        this.dayOfMonth = this.chopOffDayOfMonth[2];
        switch (this.chopOffDayOfMonth[2]) {
            case '1' || '21' || '31': {
                this.dayOfMonth = this.dayOfMonth + 'st';
                console.info(`DAY OF MONTH: ${this.dayOfMonth}`);
                break;
            }
            case '2' || '22': {
                this.dayOfMonth = this.dayOfMonth + 'nd';
                console.info(`DAY OF MONTH: ${this.dayOfMonth}`);
                break;
            }
            case '3' || '23': {
                this.dayOfMonth = this.dayOfMonth + 'rd';
                console.info(`DAY OF MONTH: ${this.dayOfMonth}`);
                break;
            }
            default: {
                this.dayOfMonth = this.dayOfMonth + 'th';
                console.info(`DAY OF MONTH: ${this.dayOfMonth}`);
                console.info(this.convertedDate);
                break;
            }
        }
        return this.dayOfMonth;
    }

    public year = '';

    public getYear(year: string): string | void {
        this.year = year;
        this.year = this.chopOffYear[3];
        console.log(`YEAR: ${this.year}`);
        return this.year;
    }

    public time = '';

    public getNowTime(time: string): string | void {
        this.time = time;
        this.time = this.convertedTime;
        console.log(`TIME: ${this.time}`);
        return this.time;
    }
}
export default dateTimeObject;
