let targetDate = new Date("2026-07-01").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = targetDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

    document.getElementById("countdown").innerHTML =
        days + " days " + hours + "h " + minutes + "m left";

    if(distance < 0){
        document.getElementById("countdown").innerHTML =
        "Happy Birthday Rahma 💖";
    }
}, 1000);
