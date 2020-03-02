//  2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
  let number = prompt('Enter number from 0 to 9'); 
  let spec = [')', '!', '@', '#', '$', '%', '^', '&','*','('];
  if (number>=0 && number<=9){
    console.log(spec[number]);  
    alert (spec[number]);  
  }
