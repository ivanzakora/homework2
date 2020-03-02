// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.


let amount = prompt('Enter purchase amount');

let discount = 0;
switch(true){
     case (amount>=200 && amount<300):{
        discount = 3;
        break;  
     }
     
     case (amount>=300 && amount<500):{
        discount = 5;
        break;  
     }
     case (amount>=500):{
        discount = 7;
        break;  
     }
}

console.log (discount);
alert('Total: ' + amount*(100-discount)/100);
