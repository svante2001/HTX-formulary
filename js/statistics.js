var numbers = [];
var arr = numbers;
var sortedNumbers = sort()

function sort() {
    let swapped;
    do {
        swapped = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

function statistics() {

    // Makes it possible to press enter insted of the 'tilføj' button
    var input = document.getElementById("statArrayInput");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("statAdd").click();
        }
    });

    // Makes an array and push all the inputs into it
    document.getElementById('statAdd').onclick = function () {
        const input = document.getElementById('statArrayInput');
        numbers.push(parseFloat(input.value));
        document.getElementById('statArrayInput').value = '';
    }

    // When clicked 'udregn'
    document.getElementById('statCalc').onclick = function () {
        // Sum and average
        var sum = 0;
        for (var i = 0; i < numbers.length; i++) {
            sum = sum + numbers[i];
        }
        document.getElementById('Sum').innerHTML = 'Sum: ' + sum;
        var avg = sum / numbers.length;
        document.getElementById('Gennemsnit').innerHTML = 'Gennemsnit: ' + avg;

        // Sort to make the dataset in order

        var MindsteVærdi = sortedNumbers[0];
        var StørsteVærdi = sortedNumbers[numbers.length - 1];

        // Maximum and minimum values
        document.getElementById('MindsteVærdi').innerHTML = 'Mindste værdi: ' + MindsteVærdi;
        document.getElementById('StørsteVærdi').innerHTML = 'Største værdi: ' + StørsteVærdi;

        // Q1, median and Q3
        var median = 0;
        var Q1 = 0;
        var Q3 = 0;
        if (numbers.length % 2 !== 0) { // Odd lenght
            var int_place = (sortedNumbers.length - 1) / 2;
            median = sortedNumbers[int_place];
            document.getElementById('Median').innerHTML = 'Median: ' + median;
            Q1 = median / 2;
            document.getElementById('Q1').innerHTML = 'Q1: ' + Q1;
            Q3 = median + (median / 2);
            document.getElementById('Q3').innerHTML = 'Q3: ' + Q3;
        }
        else {  //Even lenght
            var int_place2 = (sortedNumbers.length / 2) - 1;
            var int_place3 = (sortedNumbers.length / 2);
            var even_median1 = sortedNumbers[int_place2];
            var even_median2 = sortedNumbers[int_place3];
            median = (even_median1 + even_median2) / 2;
            Q1 = median / 2;
            document.getElementById('Q1').innerHTML = 'Q1: ' + Q1;
            document.getElementById('Median').innerHTML = 'Median: ' + median;
            Q3 = median + (median / 2);
            document.getElementById('Q3').innerHTML = 'Q3: ' + Q3;
        }

        //Kvartilbredde
        var kvartilbredde = Q3 - Q1;
        document.getElementById('Kvartilbredde').innerHTML = 'Kvartilbredde: ' + kvartilbredde;

        // Variations
        var variation = StørsteVærdi - MindsteVærdi;
        document.getElementById('variation').innerHTML = 'Variations bredde: ' + variation;

        // Skævhed
        if (median > avg) {
            document.getElementById('Skævhed').innerHTML = 'Skævhed: Højreskævt'
        } else if (median < avg) {
            document.getElementById('Skævhed').innerHTML = 'Skævhed: Venstreskævt'
        } else {
            document.getElementById('Skævhed').innerHTML = 'Skævhed: Ingen'
        }
    }

    // Clear output div and input array
    document.getElementById('statClear').onclick = function () {
        document.getElementById('MindsteVærdi').innerHTML = 'Mindste værdi:'
        document.getElementById('StørsteVærdi').innerHTML = 'Største værdi:'
        document.getElementById('Sum').innerHTML = 'Sum:'
        document.getElementById('Gennemsnit').innerHTML = 'Gennemsnit:'
        document.getElementById('Q1').innerHTML = 'Q1:'
        document.getElementById('Median').innerHTML = 'Median:'
        document.getElementById('Q3').innerHTML = 'Q3:'
        numbers = [];
        textarea = '';
    }

    // Copy sorted array to clipboard
    document.getElementById('statOrder').onclick = function () {
        var copySortedNumbers = sort();
        var textarea = document.createElement('textarea');
        var result = copySortedNumbers;
        textarea.value = result;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    }
}