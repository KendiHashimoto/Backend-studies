const { EventEmitter } = require("events")
const ev = new EventEmitter()

// ev.once = vai ouvir apenas uma única vez.
ev.on("saySomenthing", (message) => {
  console.log("Estou ouvindo você", (message))
})

ev.emit("saySomenthing", "Josepe")
ev.emit("saySomenthing", "Josefino")
ev.emit("saySomenthing", "Gerso")