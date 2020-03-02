// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.


let number = prompt('Enter 5 digits number');

if (number.length == 5){
let n=0;
for (i=0;i < Math.floor(number.length/2); i++){
    if (number[i] == number[number.length-1-i]){
    console.log(i);    
    n++;
    } 
}

if (n == Math.floor(number.length/2)){
    alert ('Polindrom'); 
} else {
    alert ('No');
}
} else {
    alert ('Please enter 5 digits number');   
}