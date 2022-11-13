export class Doors {
    #color
    #status
    #dimensionX
    #dimensionY
    #dimensionZ

    toggleDoor() {
        this.setStatus(!this.#status)
    }
    paintDoor(color) {
        this.setColor(color)
    }
    statusDoor() {
        return this.getStatus()
    }

    getColor() {
        return this.#color
    }
    setColor(color) {
        this.#color = color
    }
    getStatus() {
        return this.#status
    }
    setStatus(status) {
        this.#status = status
    }
    getDimensionX() {
        return this.#dimensionX
    }
    setDimensionX(dimensionX) {
        this.#dimensionX = dimensionX
    }
    getDimensionY() {
        return this.#dimensionY
    }
    setDimensionY(dimensionY) {
        this.#dimensionY = dimensionY
    }
    getDimensionZ() {
        return this.#dimensionZ
    }
    setDimensionZ(dimensionZ) {
        this.#dimensionZ = dimensionZ
    }
}