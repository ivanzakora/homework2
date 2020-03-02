// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За  каждый правильный ответ начисляется 2 балла. 
// После вопросов выведите пользователю количество набранных баллов.

let points = 0;
let answer1 = 'two';
let answer2 = 'one';
let answer3 = 'two';

let quest1 = prompt('Question 1. Enter answer: "one" or "two" or "three"');

if (quest1 == answer1){
  points += 2;
}

let quest2 = prompt('Question 2. Enter answer: "one" or "two" or "three"');

if (quest2 == answer2){
  points += 2;
}

let quest3 = prompt('Question 3. Enter answer: "one" or "two" or "three"');

if (quest3 == answer3){
  points += 2;
}

alert('You earned: ' + points + ' points');
