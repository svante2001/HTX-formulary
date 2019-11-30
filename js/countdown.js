function countdown() {
    var next_break = new Date("dec 20, 2019 16:00:00").getTime();

    var x = setInterval(function () {
        var time_now = new Date().getTime();
        var t = next_break - time_now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("break").innerHTML = 'Juleferie om: ' + days + "d " + hours + "t " + minutes + "m " + seconds + "s ";

        if (t < 0) {
            clearInterval(x);
            document.getElementById("break").innerHTML = "Juleferie!";
        }
    }, 10);
}