function main() {
    const myform = document.getElementById('myform');
    myform.onsubmit = function() {
        const input = document.getElementById('input');
        const output = document.getElementById('output');

        // Divides the input into atoms and substrings
        var molecule = input.value;
        var regex = /([A-Z][a-z]?\d*)/g;
        var match, results = [];
        match = molecule.match(regex);
        for (var m in match) {
            var submatches = match[m].split(/\d/);
            var atom = submatches[0];
            var n = match[m].substr(atom.length);
            if (n) {
                for (var i = 0; i < n; i++) {
                    results.push(atom);
                }
            } else {
                results.push(atom);
            }
        }

        // The periodic table in cases
        var w = 0.0;
        for (var i in results) {
            var atom = results[i];
            switch (atom) {
                case 'H':
                    w += 1.008;
                    break;
                case 'He':
                    w += 4.003;
                    break;
                case 'Li':
                    w += 6.941;
                    break;
                case 'Be':
                    w += 9.012;
                    break;
                case 'B':
                    w += 10.81;
                    break;
                case 'C':
                    w += 12.01;
                    break;
                case 'N':
                    w += 14.01;
                    break;
                case 'O':
                    w += 16;
                    break;
                case 'F':
                    w += 19.00;
                    break;
                case 'Ne':
                    w += 20.18;
                    break;
                case 'Na':
                    w += 23;
                    break;
                case 'Mg':
                    w += 24.31;
                    break;
                case 'Al':
                    w += 26.98;
                    break;
                case 'Si':
                    w += 28.09;
                    break;
                case 'P':
                    w += 30.97;
                    break;
                case 'S':
                    w += 32.07;
                    break;
                case 'Cl':
                    w += 35.5;
                    break;
                case 'Ar':
                    w += 39.95;
                    break;
                case 'K':
                    w += 39.10;
                    break;
                case 'Ca':
                    w += 40.08;
                    break;
                case 'Sc':
                    w += 44.96;
                    break;
                case 'Ti':
                    w += 47.87;
                    break;
                case 'V':
                    w += 50.94;
                    break;
                case 'Cr':
                    w += 52.00;
                    break;
                case 'Mn':
                    w += 54.94;
                    break;
                case 'Fe':
                    w += 55.85;
                    break;
                case 'Co':
                    w += 58.93;
                    break;
                case 'Ni':
                    w += 58.69;
                    break;
                case 'Cu':
                    w += 63.55;
                    break;
                case 'Zn':
                    w += 65.38;
                    break;
                case 'Ga':
                    w += 69.72;
                    break;
                case 'Ge':
                    w += 72.64;
                    break;
                case 'As':
                    w += 74.92;
                    break;
                case 'Se':
                    w += 78.96;
                    break;
                case 'Br':
                    w += 79.90;
                    break;
                case 'Kr':
                    w += 83.80;
                    break;
                case 'Rb':
                    w += 85.47;
                    break;
                case 'Sr':
                    w += 87.62;
                    break;
                case 'Y':
                    w += 88.91;
                    break;
                case 'Zr':
                    w += 91.22;
                    break;
                case 'Nb':
                    w += 92.22;
                    break;
                case 'Mo':
                    w += 95.96;
                    break;
                case 'Ru':
                    w += 101.1;
                    break;
                case 'Rh':
                    w += 102.9;
                    break;
                case 'Pd':
                    w += 106.4;
                    break;
                case 'Ag':
                    w += 107.9;
                    break;
                case 'Cd':
                    w += 112.4;
                    break;
                case 'In':
                    w += 114.8;
                    break;
                case 'Sn':
                    w += 118.7;
                    break;
                case 'Sb':
                    w += 121.8;
                    break;
                case 'Te':
                    w += 127.6;
                    break;
                case 'I':
                    w += 126.9;
                    break;
                case 'Xe':
                    w += 131.3;
                    break;
                case 'Cs':
                    w += 132.9;
                    break;
                case 'Ba':
                    w += 137.3;
                    break;
                case 'La':
                    w += 138.9;
                    break;
                case 'Hf':
                    w += 178.;
                    break;
                case 'Ta':
                    w += 180.9;
                    break;
                case 'W':
                    w += 183.9;
                    break;
                case 'Re':
                    w += 186.2;
                    break;
                case 'Os':
                    w += 190.2;
                    break;
                case 'Ir':
                    w += 192.2;
                    break;
                case 'Pt':
                    w += 195.1;
                    break;
                case 'Au':
                    w += 197.0;
                    break;
                case 'Hg':
                    w += 200.6;
                    break;
                case 'Tl':
                    w += 204.4;
                    break;
                case 'Pb':
                    w += 207.2;
                    break;
                case 'Bi':
                    w += 209.0;
                    break;
            }
        }

        // Intial result - toFixed rounds to (n) decimals
        output.innerHTML = w.toFixed(3) + ' g/mol';
        output2.innerHTML = molecule;

        // Log
        const log = document.getElementById("log");
        log.innerHTML += '<li>' + molecule + ':   ' + w.toFixed(3) + ' g/mol</li>';
        return false;
    }

    // Clear log
    document.getElementById("clearLog").onclick = function () {
        var log = document.getElementById("log");
        log.innerHTML = '';
        output.innerHTML = '';
        output2.innerHTML = '';
        document.getElementById('input').value = '';
    }

    // Copy result to clipboard button
    document.getElementById("copy").onclick = function () {
        var textarea = document.createElement('textarea');
        const result = document.getElementById('output')
        textarea.value = result.innerHTML;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    }
}

function stofmængde () {
    document.getElementById("udregnStofmængde").onclick = function () {
        var n = document.getElementById('stofmægde_n').value;
        var m = document.getElementById('m').value;
        var M = document.getElementById('M').value;

        if (n && m && M) {
            alert('Du må kun udfylde 2 felter')
        } else if (m && M) {
            document.getElementById('stofmægde_n').value = (m/M).toFixed(3) + ' mol';
        } else if (n && m) {
            document.getElementById('M').value = (m/n).toFixed(3) + ' g/mol';
        } else if (n && M) {
            document.getElementById('m').value = (n*M).toFixed(3) + ' g';
        }
    }

    document.getElementById('clearStofmængde').onclick = function () {
        document.getElementById('stofmægde_n').value = '';
        document.getElementById('m').value = '';
        document.getElementById('M').value = '';
    }
}

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

function vinkelBeregner() {
    document.getElementById("calculateVinkel").onclick = function () {
        var A = parseFloat(document.getElementById('vinkelA').value);
        var B = parseFloat(document.getElementById('vinkelB').value);
        var C = parseFloat(document.getElementById('vinkelC').value);
        var a = parseFloat(document.getElementById('sidea').value);
        var b = parseFloat(document.getElementById('sideb').value);
        var c = parseFloat(document.getElementById('sidec').value);

// Calculation setup

        function findSidsteVinkel() {
            if (A && B) { // 1
                document.getElementById('vinkelC').value = 180 - A - B;
            } else if (A && C) { // 2
                document.getElementById('vinkelB').value = 180 - A - C;
            } else if (B && C) { // 3
                document.getElementById('vinkelA').value = 180 - B - C;
            }
        }

        function sinusRelation() {
            if (a && A && C) { // 1
                document.getElementById('sidec').value = (Math.sin(C) * a) / Math.sin(A).toFixed(3); //FIXME: Returns a wrong number
           } else if (A && a && b) { // 2
                document.getElementById('vinkelB').value = (Math.asin( (sin(A)*b) /a) )*(180/Math.PI).toFixed(3); //FIXME: Doesnt return anything (calculation.js:464 Uncaught ReferenceError: sin is not defined??)
           }
        }

// Call the setup funcrions - then print result in input boxes

        if (A && B && C) {
            alert('Kan ikke udregne trekanten med kun 3 vinkler. Der skal være mindst en side')
        }

        else if (a && b && c) {
            document.getElementById('vinkelA').value = (180*Math.acos((b*b+c*c-a*a)/(2*b*c))/Math.PI).toFixed(3);
            document.getElementById('vinkelB').value = (180*Math.acos((a*a+c*c-b*b)/(2*a*c))/Math.PI).toFixed(3);
            document.getElementById('vinkelC').value = (180*Math.acos((a*a+b*b-c*c)/(2*a*b))/Math.PI).toFixed(3);
        }

        // Nothing happens in this if statement of some reason but it is entered
        else if (A && a && b) {
            sinusRelation(); // Angle B (sinus 2)
            B = document.getElementById('vinkelB').value; // Gets angle B from last calculation
            findSidsteVinkel(); // Angle C (vinkel 1)
            sinusRelation(); // Side c (sinus 1)
        }

        else if (A && a && c) {

        }

        else if (A && a && b) {

        }

        // Works!! but check side c's math and remake temp_B
        else if (a && A && C) {
            sinusRelation(); // Side c (sinus 1)
            findSidsteVinkel(); // Angle B (sinus 2)
            var temp_B = document.getElementById('vinkelB').value; // Gets angle B from last calculation
            document.getElementById('sideb').value = (Math.sin(temp_B)*a)/Math.sin(A); // Side b
        }

        else {
            alert('Ikke nok/Forkert information')
        }
    }

    document.getElementById("clearVinkelberegner").onclick = function () {
        document.getElementById('vinkelA').value = '';
        document.getElementById('vinkelB').value = '';
        document.getElementById('vinkelC').value = '';
        document.getElementById('sidea').value = '';
        document.getElementById('sideb').value = '';
        document.getElementById('sidec').value = '';
    }
}