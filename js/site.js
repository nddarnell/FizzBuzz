// button event listener
document.getElementById("btnSubmit").addEventListener("click", getValues)

// Get Values
function getValues(){

    let firstValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    firstValue = parseInt(firstValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(firstValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(firstValue, endValue);

        displayNumbers(numbers);
    } else {
        alert("Your Fizz and Buzz Values must be Integers.");
    }

}

// Get Fizz Buzz Data
// Logic function
function generateNumbers(startValue, endValue){
    
    let numbers = [];
    // this for loop is looping through our start and end values and pushing the proper words to the correct numbers with the % sign
    for (let index = startValue; index <= endValue; index++) {
        // % sign is called a modulas all it does it get the remainder
        if(index % 3 == 0 && index % 5 == 0){
            numbers.push("FizzBuzz")
        }else if (index % 3 == 0){
            numbers.push("Fizz")
        }else if (index % 5 == 0){
            numbers.push("Buzz");
        }else{
            numbers.push(index);
        }
        
    };

    return numbers;
    
}

// Another example for how to generateNumbers
// this is called ternary operators
// Very cool and useful code
function generateNumbersB(startValue, endValue){
    let numbers = [];
    for (let index = startValue; index <= endValue; index++) {
        let value = ((i % 3 == 0 ? 'Fizz' : '') + (i % 5 == 0 ? 'Buzz' : '') || index);
        numbers.push(value)
    }
    return numbers;
}

// Display Values
// View Function
function displayNumbers(numbers){

    let tableData = document.getElementById("results");

    let templateRow = document.getElementById("fbTemplate")

    // clear table 
    tableData.innerHTML ="";

    for (let index = 0; index < numbers.length; index+=5) {
        let tableRow = document.importNode(templateRow.content, true);
        
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(numbers[index]);
        rowCols[0].textContent = numbers[index];

        rowCols[1].classList.add(numbers[index+1]);
        rowCols[1].textContent = numbers[index+1];

        rowCols[2].classList.add(numbers[index+2]);
        rowCols[2].textContent = numbers[index+2];

        rowCols[3].classList.add(numbers[index+3]);
        rowCols[3].textContent = numbers[index+3];

        rowCols[4].classList.add(numbers[index+4]);
        rowCols[4].textContent = numbers[index+4];

        tableData.appendChild(tableRow);
    }



}
