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



 let a = [], b = [];
a[0] = prompt('Enter A1');
a[1] = prompt('Enter A2');
a[2] = prompt('Enter A3');

b[0] = prompt('Enter B1');
b[1] = prompt('Enter B2');
b[2] = prompt('Enter B3');

if (a.every(elem => elem <= 100)&& b.every(elem => elem <= 100)){

 a.sort(function(n,m){ 
   return n - m
  });

 console.log(a);


 b.sort(function(n,m){ 
     return n - m
 }); 
 console.log(b); 


 let amount = 0;
   for (i=0; i < 3; i++) {
   amount+=a[i]*b[i];
   }
   alert ('Amount: '+ amount);

 }
 else{
     alert ('!!One of the numbers is more than 100!!' );  
 }