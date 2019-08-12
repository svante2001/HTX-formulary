function countdown() {
    var summerBreak = new Date("jun 26, 2020 15:00:00").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var t = summerBreak - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("Summerbreak").innerHTML = 'Sommerferie om: ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (t < 0) {
            clearInterval(x);
            document.getElementById("Summerbreak").innerHTML = "SOMMERFERIE!!!";
        }
    }, 10);
}