function statistics() {
    const input = document.getElementById('statArrayInput');
    input.onsubmit = fucntion(); {
        var numbers = new Array(input)
        // document.getElementById('statArrayInput').value = '';

        document.getElementById('statCalc').onclick = function () {

            // Sum and average
            var sum = 0;
            for( var i = 0; i < numbers.length; i++ ){
                sum++
            }
            var avg = sum/numbers.length;
            document.getElementById('Sum').innerHTML = 'Sum: ' + sum;
            document.getElementById('Gennemsnit').innerHTML = 'Gennemsnit: ' + avg;

            // Q1, median and Q3

            // bubble sort to find highest number
        }
    }
}