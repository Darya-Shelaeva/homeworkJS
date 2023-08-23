const arr = [
    {
        name: 'товар 1',
        price: '1000'
    },
    {
        name: 'товар 2',
        price: '2000'
    }
]
arr[0] = 'товар 1'

arr.push ({
    name: 'товар 3',
    price: '3000'
})

console.log(arr)

const iraArr = []
let j = 0
while(j < 10 ){
    j++
    iraArr.push(j)
}

console.log(iraArr)

const language = ['English', 'French', 'German']

language.splice(1,1, 'Spanish', 'Russian')

 console.log (language) //['English', 'Spanish', 'Russian', 'German']

const colors = ['red', 'yellow', 'black', 'orange']

const someColors = colors.slice (1, 3)
console.log (someColors) //['yellow', 'black']

const numbers = [1, 2, 3, 4]

numbers.forEach((element) => {
    let result = element * element
    console.log (result)
})

const num = [1, 2, 3, 4]

const sum = num.reduce((total, element) => { //total собирает все элементы
    return total+element
}, 0) // 0 - начальный элемент 

console.log (sum)

const person = [
    {name: 'John', age: 18 },
    {name: 'Bred', age: 15 },
    {name: 'Josh', age: 43 },
    {name: 'Kevin', age: 54 }
  ]
  const Bred = person.find ((men) => {
    if (men.name === 'Bred'){
        return true
    } else return false
  })
  console.log (Bred)

let hoops = 5;
let hoopCount = (hoops >= 10) ? "Great, now move on to tricks": 'Keep at it until you get it'
console.log (hoopCount)

let list = ["a", "b", "c"]

function arr2 (item) {
    for(let item in list){
        
    }
}
arr2(list)