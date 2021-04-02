// Your code here
class Polygon {
    constructor(sideArray){
        this.sideArray = sideArray
    }

    get countSides() {
        return this.sideArray.length
    }

    get perimeter() {
        return this.sideArray.reduce(function(side, memo) {
            return side + memo
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sideArray[0] + this.sideArray[1] < this.sideArray[2]) {
            return false
        } else if (this.sideArray[1] + this.sideArray[2] < this.sideArray[0]) {
            return false
        } else if (this.sideArray[2] + this.sideArray[0] < this.sideArray[1]) {
            return false
        } else {
            return true
        } 
    }
}

class Square extends Triangle {
    get isValid() {
        if (this.sideArray[0] == this.sideArray[1] && this.sideArray[0] == this.sideArray[2] && this.sideArray[0] == this.sideArray[3]) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sideArray[0]*this.sideArray[0]
    }
}