const { inherits } = require("util")
const { EventEmitter } = require("events")

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter)

const christ = new Character("Jesus Cristo")
christ.on("pastor", () =>
  console.log(
    `Eu ${christ.name}, sou o bom Pastor que dá a vida pelas ovelhas.`
  )
)

console.log("Quem é o bom Pastor?")
christ.emit("pastor")
