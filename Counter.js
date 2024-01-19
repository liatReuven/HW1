
class counter {
    constructor(num) {
        this.num = num;
    }

    Initialize() {
        this.num = parseInt(document.getElementById("co").value);

    }

    Increment() {
        this.num += 1;
        document.getElementById("co").value = this.num;
    }

    Go() {
        document.getElementById("para").innerHTML = null;
        for (let index = 0; index <= this.num; index++) {
            document.getElementById("para").innerHTML += index + ", ";
        }
    }
}

c1 = new counter();
