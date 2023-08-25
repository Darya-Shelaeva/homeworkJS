'use strict'

const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл')

styles.splice(1, 1, 'Классика')

console.log(styles.shift(styles))

styles.unshift('Рэп', 'Регги')


console.log (styles)


//4 задача
/*
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
}*/

const num = []

while (true) {
    const numbers = prompt("введите число")

    const isNumeric = n => !!Number(n);

    if(!isNumeric(numbers) || !numbers ){
        break;
    }

    num.push(numbers)
}

const sum = num.reduce((acum, item) =>  {
    return acum + +item //+ перед item превращает его в число
}, 0) //чему по-умолчанию равен acum

console.log (`Сумма ${sum}`)


