import { Doors } from './Doors.js';
import { House } from './House.js';

// Program 1
const door = new Doors()

door.setColor('Red')
door.setStatus(true)
door.setDimensionX(100)
door.setDimensionY(100)
door.setDimensionZ(100)

console.log('===================== Project 1 =========================')
console.log('Cor: ' + door.getColor())
console.log(door.statusDoor() ? 'Door: Opened' : 'Door: Closed')
console.log('Dimension X: ' + door.getDimensionX())
console.log('Dimension Y: ' + door.getDimensionY())
console.log('Dimension Z: ' + door.getDimensionZ())

door.paintDoor('Yellow')
door.toggleDoor()

console.log('\nColor: ' + door.getColor())
console.log(door.statusDoor() ? 'Door: Opened' : 'Door: Closed')
console.log('Dimension X: ' + door.getDimensionX())
console.log('Dimension Y: ' + door.getDimensionY())
console.log('Dimension Z: ' + door.getDimensionZ())
console.log('=========================================================\n')

// Program 2
const house = new House()

house.setColor('Yellow')
house.setDoor1(true)
house.setDoor2(false)
house.setDoor3(false)

house.paintHouse('Green')
console.log("===================== Project 2 =========================");
console.log("Color: " + house.getColor());
console.log("Open doors: " + house.doorsOpen());
console.log("=========================================================");


