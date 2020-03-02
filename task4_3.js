// 3. Запросить у пользователя трехзначное  число и проверить, есть ли в нем одинаковые цифры.


let number = prompt('Enter 3 digit number');

let re = /^\d{3}$/;
if (!re.exec(number)){
    alert ('Not 3 digit number'); 
    throw 'stop';    // оставнавливает выполнение скрипта
}

let n=0;
for (i=0; i<=2; i++){
    for(j=0;j<=2;j++){
        if ((i!=j) && (number[i]==number[j])){
            n++; 
        }
    }
}
if (n==0){
  alert ('Every digit is unique');  
} else {
    alert ('There are same digits');   
}
