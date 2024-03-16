function calculate(list){
    // Initialize result with the first number in the array
    var result = parseFloat(list[0]); // Convert the first element to a number

    // Iterate through the array starting from the second element
    for (var i = 1; i < list.length; i += 2) {
    // Perform the corresponding operation based on the operator
        var operator = list[i];
        var operand = parseFloat(list[i + 1]); // Convert the next element to a number

        switch (operator) {
            case "add":
                result += operand;
                break;
            case "subtract":
                result -= operand;
                break;
            case "multiply":
                result *= operand;
                break;
            case "divide":
                result /= operand;
                break;
        }
    }
    return result;
}

const digitsbox = document.querySelector(".digits-box");
for (i=0;i<10;i++){
    digit = document.createElement('button');
    digit.classList.add('digit');
    digit.classList.add('data');
    digit.innerText = i;
    digit.id = i
    digitsbox.appendChild(digit);
}

const body = document.querySelector('body')


let storedData = [];

function storeHelper(list, newItem){
    const lastItem = list[list.length - 1];
    if (!isNaN(newItem)){
        console.log("The new item is a number.");
        if (!isNaN(lastItem)){
            console.log("The last item is a number.");
            list[list.length - 1] = lastItem + newItem;
        }
        else{
            list.push(newItem)
            console.log("The last item is a operator.");
        }
    }else{
        console.log("The new item is a operator")
        if (!isNaN(lastItem)){
            console.log("The last item is a number.");
            list.push(newItem)
        }
        else{
            list[list.length - 1] = newItem;
            console.log("The last item is a operator.");
        }
    }
    return list;  
}

function list2formula(list){
    let formula;
    return storedData
    .map(item => item === 'add' ? '+' : item)
    .map(item => item === 'subtract' ? '-' : item)
    .map(item => item === 'mutliply' ? '×'  : item)
    .map(item => item === 'divide' ? '÷' : item)
    .join(' ');
}

const display = document.createElement('div');
display.classList.add('display');

function handleClickData(event) {
    // Retrieve the ID of the clicked element and make new data list 
    storedData = storeHelper(storedData,event.target.id);
    display.innerText = list2formula(storedData);
    body.appendChild(display);
}


const datas = document.querySelectorAll(".data");

Array.from(
  datas).forEach(
    (element)=>{
      element.addEventListener(
        "click",handleClickData);   
})


function handleClickClear(event){
    storedData = []
    display.innerHTML = ''
}
const clear = document.querySelector('.clear');
clear.addEventListener(
    'click',handleClickClear);


function handleClickEqual(event){
    if (storedData.length%2===0){
        storedData.pop()
    }
    let result = calculate(storedData);
    console.log(result)
    display.innerText = list2formula(storedData) + ' = ' + result;
    console.log(display)
}
const equal = document.querySelector('.equal');
equal.addEventListener(
    'click',handleClickEqual);



