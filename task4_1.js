//1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let age = prompt('Enter your age'); 
switch (true) {
    case age>=0 && age<12:
        alert ('Child');  
      break;
    case age>=12 && age<=18:
        alert ('Teen'); 
      break;
    case age>=18 && age<=60:
        alert ('Adult'); 
      break;
      case age>=60:
        alert ('Pensioner'); 
      break;
    default:
      break;
  }