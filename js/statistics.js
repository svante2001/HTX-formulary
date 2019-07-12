function statistics() {
    var numbers = [];
    document.getElementById('statAdd').onclick = function() {
        const input = document.getElementById('statArrayInput');
        numbers.push(parseFloat(input.value));
        document.getElementById('statArrayInput').value = '';
    }

    document.getElementById('statCalc').onclick = function() {
        // Sum and average
        var sum = 0;
        for (var i = 0; i < numbers.length; i++) {
            sum = sum + numbers[i];
        }
        document.getElementById('Sum').innerHTML = 'Sum: ' + sum;
        var avg = sum / numbers.length;
        document.getElementById('Gennemsnit').innerHTML = 'Gennemsnit: ' + avg;

        // Bubble sort to make the dataset in order to find the highest number
        var sortedNumbers = numbers.sort()

        // Q1, median and Q3
        if (numbers.length % 2 !== 0) {
            document.getElementById('Median').innerHTML = 'Median: ' + numbers[(numbers.length + 1) / 2];
        } else {
            document.getElementById('Median').innerHTML = 'Median: ' + numbers[numbers.length / 2];
        }
    }
}