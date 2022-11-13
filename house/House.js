export class House {
    #color
    #door1
    #door2
    #door3

    paintHouse(color) {
        this.setColor(color)
    }
    doorsOpen() {
        let count = 0
        count += this.getDoor1() ? 1 : 0
        count += this.getDoor2() ? 1 : 0
        count += this.getDoor3() ? 1 : 0
        return count
    }

    getColor() {
        return this.#color
    }
    setColor(color) {
        this.#color = color
    }

    getDoor1() {
        return this.#door1
    }
    setDoor1(door1) {
        this.#door1 = door1
    }

    getDoor2() {
        return this.#door2
    }
    setDoor2(door2) {
        this.#door2 = door2
    }

    getDoor3() {
        return this.#door3
    }
    setDoor3(door3) {
        this.#door3 = door3
    }
}