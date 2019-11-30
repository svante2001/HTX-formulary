var arrayX = [];
var arrayY = [];

function sumVector(arrayX, arrayY, oper) {
    var plus = (x, y) => x + y;
    var minus = (x, y) => x - y;
    var vectorX = 0.0;
    var op = (oper === 'plus') ? plus : minus;
    var vectorY = 0.0;

    for (var i = 0; i < arrayX.length; i++) {
        vectorX = op(vectorX, arrayX[i]);
        vectorY = op(vectorY, arrayY[i]);
    }
    return [vectorX, vectorY];
}

function vector() {
    document.getElementById('vectorAdd').onclick = function () {
        const input1 = document.getElementById('Vx');
        const input2 = document.getElementById('Vy');
        arrayX.push(parseFloat(input1.value));
        arrayY.push(parseFloat(input2.value));
        document.getElementById('Vx').value = '';
        document.getElementById('Vy').value = '';
    }

    document.getElementById("vektorUdregn").onclick = function () {
        var vectorMenu = document.getElementById('vectorOperation').selectedIndex;

        if (vectorMenu == 0) {
            // nothing
        } else if (vectorMenu == 1) {
            var x = arrayX[0]
            var y = arrayY[0]
            var result = (x * x + y * y).toFixed(3)
            var resultSQRT = Math.sqrt(x * x + y * y).toFixed(3);
            document.getElementById('vektorResult').innerHTML = 'Længde: ' + result;
            document.getElementById('vektorResult2').innerHTML = 'Længde reelt: ' + resultSQRT;
        } else if (vectorMenu == 2) {
            // addition
            if (arrayX.length == arrayY.length) {
                sumV = sumVector(arrayX, arrayY, 'plus');
                document.getElementById('vektorResult').innerHTML = 'x: ' + sumV[0] + ', y: ' + sumV[1];
            } else {
                alert('Der skal være lige mange i x og y')
            }
        } else if (vectorMenu == 3) {
            // subtraktion
            if (arrayX.length == arrayY.length) {
                sumV = sumVector(arrayX, arrayY, 'minus');
                document.getElementById('vektorResult').innerHTML = 'x: ' + sumV[0] + ', y: ' + sumV[1];
            } else {
                alert('Der skal være lige mange i x og y')
            }
        } else if (vectorMenu == 4) {
            // skalarprodukt
            var a_1 = arrayX[0];
            var a_2 = arrayY[0];
            var b_1 = arrayX[1];
            var b_2 = arrayY[1];
            var skalar = ((a_1 * b_1) + (a_2 * b_2)).toFixed(3);

            document.getElementById('vektorResult').innerHTML = 'Skalarproduktet: ' + skalar;
        }
    }

    document.getElementById("vektorClear").onclick = function () {
        result = 0;
        resultSQRT = 0;
        document.getElementById('vektorResult').innerHTML = '';
        document.getElementById('vektorResult2').innerHTML = '';
        document.getElementById('Vx').value = '';
        document.getElementById('Vy').value = '';
        document.getElementById("vectorOperation").selectedIndex = 0;
        document.getElementById("operation").selectedIndex = 0;
    }
}