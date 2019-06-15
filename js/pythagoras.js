function Pythagaros() {
    document.getElementById("calculatePythagaros").onclick = function () {
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;
        var c = document.getElementById('c').value;

        if (a && b && c) {
            document.getElementById('a').value = 'Kun 2 udfyldes';
            document.getElementById('b').value = 'Kun 2 udfyldes';
            document.getElementById('c').value = 'Kun 2 udfyldes';
            alert('Du skal kun udfylde 2 variabler')
        } else if (a && b) {
            document.getElementById('c').value = 'c = ' + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(3);
        } else if (a && c) {
            document.getElementById('b').value = 'b = ' + Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2)).toFixed(3);
        } else if (b && c) {
            document.getElementById('a').value = 'a = ' + Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2)).toFixed(3);
        } else {
            document.getElementById('a').value = 'Udfyld 2';
            document.getElementById('b').value = 'Udfyld 2';
            document.getElementById('c').value = 'Udfyld 2';
            alert('Du skal udfylde 2')
        }
    }

    // Clear result
    document.getElementById("clearPythaharos").onclick = function () {
        document.getElementById('a').value = '';
        document.getElementById('b').value = '';
        document.getElementById('c').value = '';
    }
}