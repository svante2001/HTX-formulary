function percent () {
    document.getElementById("udregn").onclick = function () {
        var operation = document.getElementById("percentSelection").selectedIndex;
        var one = document.getElementById('input1').value;
        var two = document.getElementById('input2').value;

        if (operation == 0) {
            // nothing
        } else if (operation == 1) {
            // x ud af y
            if (one && two) {
                var result1 = ((one/two)*100).toFixed(2);
                document.getElementById('percentResult').innerHTML = result1 + '%';
                document.getElementById('percentLog1').innerHTML = '(x/y)*100=z%';
                document.getElementById('percentLog2').innerHTML = '(' + one + '/' + two + ')' + '*100=' + result1 + '%';
            }
        } else if (operation == 2) {
            // x% ud af y
            if (one && two) {
                var result2 = ((one/100)*two).toFixed(2);
                document.getElementById('percentResult').innerHTML = result2;
                document.getElementById('percentLog1').innerHTML = '(x/100)*y=z';
                document.getElementById('percentLog2').innerHTML = '(' + one + '/100)*' + two + '=' + result2;
            }
        } else if (operation == 3) {
            // x% +- y
            if (one && two) {
                var resultPlus = (two*(1+(one/100))).toFixed(2);
                document.getElementById('percentResult').innerHTML = resultPlus;
                document.getElementById('percentLog1').innerHTML = 'y*(1+(x/100))=z';
                document.getElementById('percentLog2').innerHTML = two + '*(1+(' + one + '/100))=' + resultPlus;

            }
        } else if (operation == 4) {
            if (one && two) {
                var resultMinus = (two*(1-(one/100))).toFixed(2);
                document.getElementById('percentResult').innerHTML = resultMinus;
                document.getElementById('percentLog1').innerHTML = 'y*(1-(x/100))=z';
                document.getElementById('percentLog2').innerHTML = two + '*(1-(' + one + '/100))=' + resultMinus;
            }
        }
   }

    document.getElementById("percentClear").onclick = function () {
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('percentResult').innerHTML = '';
        document.getElementById("percentSelection").selectedIndex = 0;
        document.getElementById('percentLog1').innerHTML = '';
        document.getElementById('percentLog2').innerHTML = '';
        document.getElementById('percentLog3').innerHTML = '';
   }
}