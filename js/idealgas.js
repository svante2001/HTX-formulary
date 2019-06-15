function idealgas() {
    document.getElementById("calculateIdeal").onclick = function () {
        var p = document.getElementById('p').value;
        var V = document.getElementById('V').value;
        var n = document.getElementById('n').value;
        var T = document.getElementById('T').value;
        const R = 0.0831;

        // If all 4 submit boxes are defined
        if (T && p && V && n) {
            document.getElementById('p').value = 'Kun 3 udfyldes';
            document.getElementById('V').value = 'Kun 3 udfyldes';
            document.getElementById('n').value = 'Kun 3 udfyldes';
            document.getElementById('T').value = 'Kun 3 udfyldes';
            alert('Du må kun udfylde 3 variabler')
        }
        // T
        else if (p && V && n) {
            document.getElementById('T').value = 'T = ' + ((p*V)/(n*R)).toFixed(3);
        } // V
        else if (n && T && p) {
            document.getElementById('V').value = 'V = ' + ((n*R*T)/p).toFixed(3);
        } // n
        else if (p && V &&T) {
            document.getElementById('n').value = 'n = ' + ((p*V)/(R*T)).toFixed(3);
        } // p
        else if (n && T && V) {
            document.getElementById('p').value = 'p = ' + ((n*R*T)/V).toFixed(3);
        } // If only 1 or 2 varibles are defined
        else {
            document.getElementById('p').value = 'Udfyld 3';
            document.getElementById('V').value = 'Udfyld 3';
            document.getElementById('n').value = 'Udfyld 3';
            document.getElementById('T').value = 'Udfyld 3';
            alert('Du skal udfylde 3 varialber')
        }
    }
    // Clear result
    document.getElementById("clearIdeal").onclick = function () {
        document.getElementById('p').value = '';
        document.getElementById('V').value = '';
        document.getElementById('n').value = '';
        document.getElementById('T').value = '';
    }
}