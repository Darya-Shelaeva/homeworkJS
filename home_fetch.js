'use strict'

let isLoading = false

fetch('https://reqres.in/api/users?per_page=12')
.then (data => {
    isLoading = true
    return data.json();
})
.then(data => {
    isLoading = true
    document.querySelector('.cont2').innerHTML = data.data.map((item) => `<div>${item.last_name}</div>`)
    console.log(data.data)
    return data.data
})
.then(data => {
    //console.log (data.data)
    const users = data
    const filteredUsers = users.filter((item) => {
      if(item.last_name[0] === 'F') {
        return true;
      }
    })
  console.log(filteredUsers)
  return users;
})
.then(data => {
    isLoading = true
    const message = 'Наша база содержит данные следующих пользователей: '
    const usersNames = data.reduce((acc, user) => {
      return [...acc, `${user.last_name}  ${user.first_name}`]
    }, [])
    const namesStr = usersNames.join(', ');
    document.querySelector('.cont3').innerHTML = `${message} ${namesStr}`
    return data
})
.then(data => {
    isLoading = true
    console.log(Object.keys(data[0]))
})
.catch((error) => {
    isLoading = true
    console.log('Ошибка', error)
})
.finally(() => {
    isLoading = false
})


