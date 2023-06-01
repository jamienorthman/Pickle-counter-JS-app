let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1;
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}







// cmd+k+c to comment multiple lines at once

// let myAge = 35;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);