
class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        let temp = "(" + this.x + "," + this.y + ")";
        return temp;
    }

    Equals(p, p1) {
        if (p.x == p1.x && p.y == p1.y) {
            return true;
        }
        else {
            return false;
        }
    }

}

po1 = new point();

pointsArr = [];
pointsArr.push(new point(1, 2));
pointsArr.push(new point(2, 3));
pointsArr.push(new point(3, 4));
pointsArr.push(new point(4, 5));

function f1(Arr1, x, y) {
    for (let index = 0; index < Arr1.length; index++) {
        if (Arr1[index].x == x && Arr1[index].y == y) {
            return true;
        }
        return false;

    }
}

function f2(Arr1, point) {
    for (let index = 0; index < Arr1.length; index++) {
        if (po1.Equals(Arr1[index], point)) {
            return true;
        }
        return false;
    }
}

function f3(Arr1) {
    let temp = Arr1[0];
    let sum = 0;
    for (let index = 0; index < Arr1.length; index++) {

        if (temp != Arr1[index]) {
            sum += Math.sqrt(Math.pow(Arr1[index].x - temp.x, 2) + Math.pow(Arr1[index].y - temp.y, 2));
        }
        temp = Arr1[index];
        document.getElementById("para").innerHTML += Arr1[index].show();
    }

    document.getElementById("para").innerHTML += `</br>length of the track: ${sum}`;
}

alert(f1(pointsArr, 1, 2));
alert(f1(pointsArr, 3, 2));
alert(f2(pointsArr, new point(1, 2)));
alert(f2(pointsArr, new point(3, 2)));

f3(pointsArr)
