// Zadanie domowe DOM

// 1. Stworz w HTML formularz, oraz liste. Formularz niech zawiera 2 pola input: author oraz message. Zrob obsluge formularza w taki sposob, aby pod formularzem wyswietlic w liscie tekst

// - Kurs ALX jest fajny - Damian
// - Dzis jest brzydka pogoda - Agnieszka


const handleSubmit = (event) => {
const title = document.querySelector('#todoList')
todoList.innerHTML += `
    <li class="#todoList"> ${todoInput.value} </li>
  `;
}
form.addEventListener(handleSubmit)

const removeList = (event) => {
const title = document.querySelector('#removeList')
 todoInput.value = '';
todoInput.setAttribute('value', '')
  `;
}
form.addEventListener(handleSubmit)