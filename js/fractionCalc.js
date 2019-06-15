function fractions () {
    function gcd(a, b) {
        while (b !== 0) {
            var temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function fractionOutput(a, b) {
        var forkort = document.getElementById('forkort').checked;
        if (forkort) {
            d = gcd(a, b);
            a = a / d;
            b = b / d;
        }

        document.getElementById('outputT').innerHTML = 'Tæller: ' + a;
        document.getElementById('outputN').innerHTML = 'Nævner: ' + b;
    }

    document.getElementById("fractions").onclick = function () {
        var aT = document.getElementById('aT').value;
        var aN = document.getElementById('aN').value;
        var bT = document.getElementById('bT').value;
        var bN = document.getElementById('bN').value;
        var operation = document.getElementById("operation").selectedIndex;
        var rT;
        var rN;

        switch (operation) {
            case 0: // Forkort
                rT = aT;
                rN = aN;
                break;
            case 1: // Plus
                rT = aT*bN + aN*bT;
                rN = aN*bN;
                break;
            case 2: // Minus
                rT = aT*bN - aN*bT;
                rN = aN*bN;
                break;
            case 3: // Gange
                rT = aT*bT;
                rN = aN*bN;
                break;
            case 4: // Division
                rT = aT*bN;
                rN = aN*bT;
                break;
        }
        fractionOutput(rT, rN);
    }
    document.getElementById('clearFractions').onclick = function () {
        document.getElementById('aT').value = '';
        document.getElementById('aN').value = '';
        document.getElementById('bT').value = '';
        document.getElementById('bN').value = '';
        document.getElementById('outputT').innerHTML = 'Tæller:';
        document.getElementById('outputN').innerHTML = 'Nævner:';
        document.getElementById("operation").selectedIndex = 0;
        document.getElementById('forkort').checked = false;
    }
}