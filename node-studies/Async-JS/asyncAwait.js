// Maneira de escrever promises

const promise = new Promise(function (resolve, reject) {
  return resolve("ok")
})

async function start() {
  try {
    const result = await promise // -> Pegando o resultado da espera pela promessa
    console.log(result)
  } catch (err) {
    console.log(err)
  } finally {
    console.log("Rodar sempre")
  }
}
start()
