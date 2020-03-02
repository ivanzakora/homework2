//8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

let circumference = prompt('Enter circumference');
let sqperimeter  = prompt('Enter square perimeter');

if (circumference <= Math.PI*sqperimeter/4){
    alert('Yes');
}else{
    alert('No');
}