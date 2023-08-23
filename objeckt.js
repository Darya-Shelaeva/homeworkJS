'use strict'

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum = (salaries.John + salaries.Ann + salaries.Pete)
  console.log(sum)

  //Вторая задача

  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
function multiplyNumeric (obj) {
    for (let key in obj) {
    if(typeof obj[key] == "number"){
       console.log (obj[key] *=2)
    }
}
}
multiplyNumeric (menu)