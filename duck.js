class Duck {
    constructor(name, color, age, weight, picture) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.picture = picture;
    }

    show() {
        document.getElementById("para").innerHTML = null;
        document.getElementById("para").innerHTML = `name:${this.name}, color:${this.color}, age:${this.age}, weight:${this.weight}, picture:${this.picture}`;
    }

    quack() {
        document.getElementById("para").innerHTML = null;
        let temp = (this.age * this.weight) / 2;

        for (let index = 0; index < temp; index++) {
            document.getElementById("para").innerHTML += "quack, ";
        }

        x.play();
    }
}

var x = document.getElementById("quackaudio");

function start() {
    document.getElementById("submit").disabled = true;

    name = document.getElementById("name").value;
    color = document.getElementById("color").value;
    age = document.getElementById("age").value;
    weight = document.getElementById("weight").value;
    picture = document.getElementById("photo").value;
    d1 = new Duck(name, color, age, weight, picture);
}
