
const operator = prompt("Введите операцию");
const number = +prompt("Введите число");//+ преобразует строку в число
const number2 = +prompt ("Введите второе число");
/*
const number = Number(numberString);
const number2 = Number(numberString2);*/

let result;

switch(operator) {
  case "+":
  result = number + number2;
  break;

  case "-":
  result = number - number2;
  break;

  case "*":
      result = number * number2;
    break;
  

  case "/":
    if(operator === '/' && number2 === 0){
      throw Error ('На ноль делить нельзя') //можно через console.log
    } else {
    result = number / number2;
  }
    break;


    default:
      console.log ('Недопустимая операция');
}


const div = document.querySelector('.result');
div.innerHTML = result;