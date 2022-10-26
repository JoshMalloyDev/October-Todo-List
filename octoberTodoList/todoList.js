let list = []
document.querySelector('.add').addEventListener('click', add)
document.querySelector('.clear').addEventListener('click', clear)
document.querySelector('.clearCompleted').addEventListener('click', clearCompleted)
let inputVal = document.querySelector('input').value
document.querySelector('.sort').addEventListener('click', sort)
console.log(list,'this is list')
// grabbig the value of the input and turning it to a inputVal
// then will use that to display in the UL.
// when i click on the li it should change it with a strike through or a highlight.


// create a function that stripps all of the LI currently displayed calling clear all
// process for replacing....for every object inside of the array we will create an li and append those to the UL
// 
let counter = 0



function add() {
    let inputVal = document.querySelector('input').value
   
    let date = new Date()
    let today = date.toLocaleDateString()
    let time = date.toLocaleTimeString()

    list.push({
        inputVal: inputVal,
        today: today,
        time: time
    })
    replace(list)
    counter++
    document.querySelector('p').innerText = 'you have' + " "+ counter + " "+ 'task left'


}
function strike(e) {

    e.target.classList.add('strike')
    if (e.target.classList.contains('strike')) {
        counter--
        document.querySelector('p').innerText = 'you have'+" " + counter + " "+'task left'
    }


}
function clearCompleted() {
    let completed = document.querySelectorAll('.strike')
    completed.forEach((task) => {
        task.remove()
    })
}
function clear() {
    let clearTask = document.querySelectorAll("li")
    clearTask.forEach((task) => {
        task.remove()
    })
}

function replace(newList) {
    clear()
    for (let i = 0; i < newList.length; i++) {
      
        let li = document.createElement('li')
        let button = document.createElement('button')
        button.innerText = '🗑️'


        li.addEventListener('click', strike)
        li.innerText = `${newList[i].inputVal} (${newList[i].today}${newList[i].time})`
        li.appendChild(button)
        button.addEventListener('click', deleteTask)
        document.querySelector('ul').appendChild(li)
    }
}
function sort() {
    if (document.getElementById("mySelect").value = 'A to Z') {
        // we want to go into the object pull out the value of the inputVal
        //  then use sort() to make them alphabetical 
        let newList = list.sort((a, b) => a.inputVal.localeCompare(b.inputVal))
        replace(newList)
    } if (document.getElementById("mySelect").value = 'time') {
        let newList = list.sort((a, b) => b.time.localeCompare(a.time))
        replace(newList)
        console.log(newList,'this is new list')
    }
}





function deleteTask(e) {
    
 
    let textArray = e.target.parentNode.childNodes[0].textContent.split('(')
console.log(textArray,'this is text array')
    let text = textArray[0].trim()
    let newList = list.filter((task)=>task.inputVal!==text)
    list = newList
    e.target.parentNode.remove()
    console.log(text,newList) 

}
document.querySelectorAll('.tabs').addEventListener('click', showTabs)

function showTabs(e){
let incomplete = list
let completed = e.target.classList.contains('strike')
const tabs = {
    completed:completed,
    incomplete:incomplete

}

}
// toggle nd hide whatever button list isnt clicked 
// create three buttons that wil have the same class on them 
// target those buttons with quaryselectall then use a forEachloop to call the same function (show tab) for ever tab of that array
// work on object munipulation by setting properties for the tab
// create three sections that will toggle the display of the section depending on if it matches the class
// create an object that has completed sorted a-z sorted by time



