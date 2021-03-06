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
        alert("test");
    }
}