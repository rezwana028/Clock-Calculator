// analog clock-----


function updateClock() {
    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondDeg = second * 6; // 360 / 60
    const minuteDeg = minute * 6 + second * 0.1; // 6 deg per min + adjust for seconds
    const hourDeg = (hour % 12) * 30 + minute * 0.5; // 360 / 12 + adjust for mins

    document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call
