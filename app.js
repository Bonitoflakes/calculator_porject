let runningTotal = '0';
let buffer = '0';
let previousOperator = null;
const calculator = document.querySelector('.calculator');


calculator.addEventListener("click", function (event) {
    eventClicker(event);
});

function eventClicker(event) {
    if (event.target.classList.contains("number")) {
        // console.log(  "number key" );
        // console.log(event.target.innerHTML)
        number(event.target.innerHTML.trim());
    } else if (event.target.classList.contains("operator")) {
        operator(event.target.innerHTML.trim());
        // console.log(event.target.innerHTML);
    } else {
        console.log('display');
    }
}

function number(val) {
    if (parseInt(buffer, 10) === 0) {
        buffer = val;
    } else {
        buffer += val;
    }
    reRender();
}

function operator(val) {
    switch (val) {
        case '+':
            // console.log('addition');
            previousOperator = val; 
            runningTotal = parseInt(buffer);
            buffer = 0;
            // console.log(previousOperator);
            // console.log(runningTotal);
            // console.log(buffer);

            reRender();
            break;
        case '-':
            // console.log('subtraction');
            previousOperator = val; 
            runningTotal = parseInt(buffer);
            buffer = 0;
            break;
        case '*':
            // console.log('multiplication');
            previousOperator = val; 
            runningTotal = parseInt(buffer);
            buffer = 0;
            break;
        case '/':
            // console.log('division');
            previousOperator = val; 
            runningTotal = parseInt(buffer);
            buffer = 0;
            break;
        case 'C':
            buffer = '0'
            reRender();
            break;
        case 'B':
            // console.log(buffer.slice(0, buffer.length - 1));
            if(parseInt(buffer)=== 0){
                return;
            }
            else if (buffer.length === 1) {
                buffer = 0;
                reRender();
            } else {
                buffer = buffer.slice(0, buffer.length - 1);
                reRender();
            }
            
            break;
        case '=':
            calculate(runningTotal, previousOperator);
            break;
        default:
            break;
    }
}

function calculate(runningTotal, previousOperator) {
    const intBuffer = parseInt(buffer);
    if (previousOperator === '+') {
        buffer = runningTotal + intBuffer;
     }  else if (previousOperator === '-') {
        buffer = runningTotal - intBuffer;
     }  else if (previousOperator === '*') {
        buffer = runningTotal * intBuffer;
     }   else if (previousOperator === '/') {
        buffer = runningTotal / intBuffer;
     } else{
         console.log("error");
     }
    reRender();
}

function reRender() {
    let display = document.querySelector('.c-display').innerHTML = buffer;
}