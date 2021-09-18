//code to switch between the dark and light mode
let modeSwitch = document.querySelector('input[name="theme"]');
modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        console.log("Dark Mode ON!")

    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        console.log("Light Mode ON!")

    }
});

//function to get ealier typed values in the result box

function getHistory() {
    return document.querySelector('.upper-value').innerHTML;
}

function printHistory(num) {
    document.querySelector('.upper-value').innerHTML = num;
}

function getOutput() { 
    return document.querySelector('.lower-value').innerHTML;
}

function printOutput(num) {
    if (num == "") {

        return document.querySelector('.lower-value').innerHTML = num;

    } else {

        return document.querySelector('.lower-value').innerHTML = getFormattedNumber(num);

    }
}

function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, '')); //give comma searted values
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click',function() {
        if (this.id == 'clear') {
            printHistory("")
            printOutput("")
        } else if (this.id == 'backspace') {
            let output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        } else {
            let output = getOutput();
            let history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history, substr(0, history.length-1);
                }
            }

            if (output != "" || history != "") {
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;

                if (this.id == "=") {
                    let result = eval(history)
                    printOutput(result)
                    printHistory("")
                } else if (this.id == "%") {
                    let n = reverseNumberFormat(getOutput())
                    let percent = n / 100;
                    printOutput(percent.toFixed(4))
                } else {
                    history = history + this.id;
                    printHistory(history)
                    printOutput("")
                }
            }
        }
    })
}

let number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        console.log()
        let output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            output = output + this.id
            printOutput(output)
        }
    })
}