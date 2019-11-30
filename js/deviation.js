function deviation () {
    document.getElementById('deviationCalc').onclick = function () {
        var measured = document.getElementById('måltVærdi').value;
        var tabel = document.getElementById('tabelVærdi').value;

        var result;
        if (measured && tabel) {
            result = (((measured - tabel) / tabel)*100).toFixed(3);
        } else {
            alert('Du skal have både en målt værdi og en tabelværdi')
        }
        document.getElementById('deviationResult').innerHTML = result + '%';
    }

    document.getElementById('deviationClear').onclick = function () {
        document.getElementById('deviationResult').innerHTML = '';
        document.getElementById('måltVærdi').value = '';
        document.getElementById('tabelVærdi').value = '';
        result = 0;
        measured = 0;
        tabel = 0;
    }
}