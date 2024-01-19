class clock {
    constructor(country, hour, minute, second) {
        this.country = country;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    ConverToSeconds(hour, minute, second) {
        let temp = parseInt(3600 * hour + 60 * minute + parseInt(second));
        return temp;
    }

    show(hour, minute, second) {
        let hourt;
        let minutet;
        let secondt;

        if (hour < 10) {
            hourt = 0 + hour;
        }
        else {
            hourt = hour;
        }

        if (minute < 10) {
            minutet = 0 + minute;
        }
        else {
            minutet = minute;
        }

        if (second < 10) {
            secondt = 0 + second;
        }
        else{
            secondt = second;
        }

        let temp = `${hourt}:${minutet}:${secondt}`;

        return temp;
    }
}

const button = document.getElementById("submit");
let clickcounter = 0;
clocks = [];
c1 = new clock();

button.addEventListener("click", function () {
    country = document.getElementById("country").value;
    hour = document.getElementById("hour").value;
    minute = document.getElementById("minutes").value;
    second = document.getElementById("seconds").value;

    document.getElementById("country").value = null;
    document.getElementById("hour").value = null;
    document.getElementById("minutes").value = null;
    document.getElementById("seconds").value = null;

    clickcounter++;
    console.log(clickcounter);

    clocks.push(new clock(country, hour, minute, second));
    console.log(clocks);

    if (clickcounter == 5) {
        for (let index = 0; index < clocks.length; index++) {
            CTS = c1.ConverToSeconds(clocks[index].hour, clocks[index].minute, clocks[index].second);
            SWH = c1.show(clocks[index].hour, clocks[index].minute, clocks[index].second);

            document.getElementById("para").innerHTML += `country: ${clocks[index].country}, Conver to seconds: ${CTS}, The hour :${SWH}</br>`;
        }
    }
})