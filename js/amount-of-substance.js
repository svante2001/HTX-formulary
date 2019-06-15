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