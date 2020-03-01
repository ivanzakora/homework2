// Task 1:
// Ремонт
// Ваш любимый дядя – директор фирмы, которая делает евроремонты в офисах. В связи с финансово-экономическим кризисом, дядюшка решил оптимизировать свое предприятие.
// Давно ходят слухи, что бригадир в дядюшкиной фирме покупает лишнее количество стройматериалов, а остатки использует для отделки своей новой дачи. 
// Ваш дядя заинтересовался, сколько в действительности банок краски необходимо для покраски стен в офисе длиной L метров, шириной – W и высотой – H, если одной банки хватает на 16м2, 
// а размерами дверей и окон можно пренебречь? Заказов много, поэтому дядя попросил написать программу, которая будет все это считать.

// Входные данные
// Пользователь вводит с клавиатуры три натуральных числа L, W, H – длину, ширину и высоту офиса в метрах соответственно, каждое из которых не превышает 1000.

// Выходные данные
// Вывести на экран одно целое число – минимальное количество банок краски, необходимых для покраски стен в офисе.


// let l = prompt('Enter the lenght of the room');
// let w = prompt('Enter the width of the room');
// let h = prompt('Enter the height of the room');

// if (l<=1000&&w<=1000&&h<=1000){
// const hidpow = 16;
// let area = (2*l+2*w)*h;
// let quantity = area/hidpow;
// alert ('Minimum quantity of tins: '+ Math.ceil(quantity));
// }
// else {
//     alert ('invalid ');  
// }


// Task 2:
// Золотой песок
// Сотрудники завода по производству золотого песка из воздуха решили поправить свое финансовое положение. Они пробрались на склад завода, где хранился золотой песок трех видов.
// Один килограмм золотого песка первого вида они смогли бы продать за A1 рублей, второго вида – за A2 рублей, а третьего вида – за A3 рублей. 
// Так получилось, что у сотрудников оказалось с собой только три емкости: первая была рассчитана на B1 килограмм груза, вторая на B2 килограмм, а третья на B3 килограмм. 
// Им надо было заполнить полностью все емкости таким образом, чтобы получить как можно больше денег за весь песок. При заполнении емкостей нельзя смешивать песок разных видов, 
// то есть, в одну емкость помещать более одного вида песка, и заполнять емкости песком так, чтобы один вид песка находился более чем в одной емкости.

// Требуется написать программу, которая определяет, за какую сумму предприимчивые сотрудники смогут продать весь песок в случае наилучшего для себя заполнения емкостей песком.

// Входные данные
// Пользователь вводит с клавиатуры 6 натуральных чисел A1, A2, A3, B1, B2, B3. Все числа не превосходят 100.

// Выходные данные
// Вывести на экран единственное целое число – сумму в рублях, которую смогут сотрудники заработать в случае наилучшего для себя заполнения емкостей песком.



// let a = [], b = [];
// a[0] = prompt('Enter A1');
// a[1] = prompt('Enter A2');
// a[2] = prompt('Enter A3');

// b[0] = prompt('Enter B1');
// b[1] = prompt('Enter B2');
// b[2] = prompt('Enter B3');

// if (a.every(elem => elem <= 100)&& b.every(elem => elem <= 100)){

// a.sort(function(n,m){ 
//   return n - m
// });

// console.log(a);


// b.sort(function(n,m){ 
//     return n - m
// }); 
// console.log(b); 


// let amount = 0;
//   for (i=0; i < 3; i++) {
//    amount+=a[i]*b[i];
//   }
//   alert ('Amount: '+ amount);

// }
// else{
//     alert ('!!One of the numbers is more than 100!!' );  
// }


// Task 3:
// Счастливый билет
// Вы пользуетесь общественным транспортом? Вероятно, вы расплачивались за проезд и получали билет с номером. Счастливым билетом называют такой билет с шестизначным номером, 
// где сумма первых трех цифр равна сумме последних трех. Т.е. билет с номером 385916 – счастливый, т.к. 3+8+5=9+1+6.
//  Вам требуется написать программу, которая проверяет счастливость билета.

//  Входные данные
// Пользователь вводит одно целое число N (0 ≤ N < 10 ** 6).

// Выходные данные
// Нужно вывести «YES», если билет с номером N счастливый и «NO» в противном случае.


// let number = prompt('Enter number');

// if (number>=100000 && number<=999999){

// let firstsum = 0;
// for (i=0; i < 3; i++){
//     firstsum += Number(number[i]);
    
//  }
//  console.log('Sum of first 3 digits: ' + firstsum);  

// let secsum = 0;
// for (j=3; j < 6; j++) {
//     secsum += Number(number[j]);  
//  }

//  console.log('Sum of last 3 digits: ' + secsum);  

//  if (firstsum == secsum){
//     alert ('Yes');
//  } else{
//     alert ('No');  
//  }

// }
// else {
//     alert ('Number is out of range');  
// }

// Task 4:
// Мини-задачи

// Вам необходимо самостоятельно решить, для какого задания какой оператор ветвления лучше использовать: if, switch или тернарный.
// 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

// let age = prompt('Enter your age'); 
// switch (true) {
//     case age>=0 && age<12:
//         alert ('Child');  
//       break;
//     case age>=12 && age<=18:
//         alert ('Teen'); 
//       break;
//     case age>=18 && age<=60:
//         alert ('Adult'); 
//       break;
//       case age>=60:
//         alert ('Pensioner'); 
//       break;
//     default:
//       break;
//   }


//   2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
//   let number = prompt('Enter number from 0 to 9'); 
//   let spec = [')', '!', '@', '#', '$', '%', '^', '&','*','('];
//   if (number>=0 && number<=9){
//     console.log(spec[number]);  
//     alert (spec[number]);  
//   }



// 3. Запросить у пользователя трехзначное  число и проверить, есть ли в нем одинаковые цифры.


// let number = prompt('Enter 3 digit number');

// let re = /^\d{3}$/;
// if (!re.exec(number)){
//     alert ('Not 3 digit number'); 
//     throw 'stop';    // оставнавливает выполнение скрипта
// }

// let n=0;
// for (i=0; i<=2; i++){
//     for(j=0;j<=2;j++){
//         if ((i!=j) && (number[i]==number[j])){
//             n++; 
//         }
//     }
// }
// if (n==0){
//   alert ('Every digit is unique');  
// } else {
//     alert ('There are same digits');   
// }



// 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// let year = prompt('Enter year');
// if (year%400==0||(year%4==0 && year%100!=0)){
//     alert ('Leap year');  
// } else {
//     alert ('Not a leap year');  
// }

// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.


// let number = prompt('Enter 5 digits number');

// if (number.length == 5){
// let n=0;
// for (i=0;i < Math.floor(number.length/2); i++){
//     if (number[i] == number[number.length-1-i]){
//     console.log(i);    
//     n++;
//     } 
// }

// if (n == Math.floor(number.length/2)){
//     alert ('Polindrom'); 
// } else {
//     alert ('No');
// }
// } else {
//     alert ('Please enter 5 digits number');   
// }

//6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAH или AZN, и получает в ответ соответствующую сумму.


// let usdam = prompt('Enter amount in USD');

// let currency = prompt('Enter currency code (EUR, UAH, AZN)');
// const usdtoeur = 0.91;
// const usdtouah = 24.60;
// const usdtoazn = 1.70;

//   switch (currency) {
//         case 'EUR':{
//             alert(usdam*usdtoeur + ' EUR');
//             break;   
//         }
//         case 'UAH': {
//             alert(usdam*usdtouah + ' UAH');   
//             break;  
//         }
//         case 'AZN':{
//             alert(usdam*usdtoazn + ' AZN');
//             break; 
//         }
//     }


// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.


// let amount = prompt('Enter purchase amount');

// let discount = 0;
// switch(true){
//      case (amount>=200 && amount<300):{
//         discount = 3;
//         break;  
//      }
     
//      case (amount>=300 && amount<500):{
//         discount = 5;
//         break;  
//      }
//      case (amount>=500):{
//         discount = 7;
//         break;  
//      }
// }

// console.log (discount);
// alert('Total: ' + amount*(100-discount)/100);


//8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

// let circumference = prompt('Enter circumference');
// let sqperimeter  = prompt('Enter square perimeter');

// if (circumference <= Math.PI*sqperimeter/4){
//     alert('Yes');
// }else{
//     alert('No');
// }


// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За  каждый правильный ответ начисляется 2 балла. 
// После вопросов выведите пользователю количество набранных баллов.

// let points = 0;
// let answer1 = 'two';
// let answer2 = 'one';
// let answer3 = 'two';

// let quest1 = prompt('Question 1. Enter answer: "one" or "two" or "three"');

// if (quest1 == answer1){
//   points += 2;
// }

// let quest2 = prompt('Question 2. Enter answer: "one" or "two" or "three"');

// if (quest2 == answer2){
//   points += 2;
// }

// let quest3 = prompt('Question 3. Enter answer: "one" or "two" or "three"');

// if (quest3 == answer3){
//   points += 2;
// }

// alert('You earned: ' + points + ' points');


// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год

// let datearr = [];
// let inputdate = prompt('Please input date');
// let pattern = /[-\/\.]/;
// let re = /\d{2}([-\/\.])\d{2}([-\/\.])\d{4}/;
// var OK = re.exec(inputdate);
// if (!OK) {
//     alert('Bad date format. DD.MM.YYYY or DD/MM/YYYY or DD-MM-YYYY formats are allowed');
// } else{
//     datearr = inputdate.split(pattern);
//     console.log(datearr);
//      }


// let year = datearr[2];
// let month = datearr[1];
// let day = datearr[0];

// if (year%400==0||(year%4==0 && year%100!=0)){
//     leap = true;   
//  } else {
//    leap=false}




// switch (true) {
//     case (day=='29'&& month=='02' && leap==true):{
//         day='01';
//         month = '03'
//         break;
//     }
//     case (day=='28'&& month=='02' && leap==false):{
//         day='01';
//         month ='03'
//         break;
//     }
//     case (day=='31'&& month=='12'):{
//             year++;
//             day ='01'
//             month ='01'
//             break;
//             }
//     case (day=='31'&& month=='12'):{
//             year++;
//             day ='01'
//             month ='01'
//             break;
//             }
//     case (day=='31'&& (month=='01'||month=='03'||month=='05'||month=='07'||month=='08'||month=='10')):{
//             day ='01'
//             month++;
//             break;
//             }
//     case (day=='30'&& (month=='04'||month=='06'||month=='09'||month=='11')):{
//             day ='01'
//             month++;
//             break;
//             }
//     default: {
//             day++;
//             break;
//             }
// }

// alert('Next day: ' + day +'.' + month + '.' + year);