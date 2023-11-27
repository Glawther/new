function startCountdown() {
    var userDateInput = document.getElementById("user-date");
    var userDate = new Date(userDateInput.value).getTime();

    if (isNaN(userDate)) {
        alert("Por favor, insira uma data válida.");
        return;
    }

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = userDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Add leading zero if needed
        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            alert("Contagem regressiva concluída!");
        }
    }, 1000);
}
