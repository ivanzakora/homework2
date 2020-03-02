// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год

let datearr = [];
let inputdate = prompt('Please input date');
let pattern = /[-\/\.]/;
let re = /\d{2}([-\/\.])\d{2}([-\/\.])\d{4}/;
var OK = re.exec(inputdate);
if (!OK) {
    alert('Bad date format. DD.MM.YYYY or DD/MM/YYYY or DD-MM-YYYY formats are allowed');
} else{
    datearr = inputdate.split(pattern);
    console.log(datearr);
     }


let year = datearr[2];
let month = datearr[1];
let day = datearr[0];

if (year%400==0||(year%4==0 && year%100!=0)){
    leap = true;   
 } else {
   leap=false}

switch (true) {
    case (day=='29'&& month=='02' && leap==true):{
        day='01';
        month = '03'
        break;
    }
    case (day=='28'&& month=='02' && leap==false):{
        day='01';
        month ='03'
        break;
    }
    case (day=='31'&& month=='12'):{
            year++;
            day ='01'
            month ='01'
            break;
            }
    case (day=='31'&& month=='12'):{
            year++;
            day ='01'
            month ='01'
            break;
            }
    case (day=='31'&& (month=='01'||month=='03'||month=='05'||month=='07'||month=='08'||month=='10')):{
            day ='01'
            month++;
            break;
            }
    case (day=='30'&& (month=='04'||month=='06'||month=='09'||month=='11')):{
            day ='01'
            month++;
            break;
            }
    default: {
            day++;
            break;
            }
}

alert('Next day: ' + day +'.' + month + '.' + year);