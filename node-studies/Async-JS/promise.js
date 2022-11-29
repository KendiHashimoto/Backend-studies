// É um objeto JS com a promessa de que algo será realizado
// É utilizado nas operações assíncronas
// Carregar um arquivo
// Leitura de dados de uma API

// Pending -> Estado inicial, assim que o Objeto da promessa é iniciado
// Fulfilled -> A promessa foi concluída com sucesso
// Rejected -> A promessa foi rejeitada, houve um erro
// Settled -> Seja com sucesso ou erro, ela foi concluída

let aceitar = true

console.log("Pedir uber")
const promise = new Promise((resolve, rejected) => {
  if (aceitar) return resolve("Pedido aceito!")
  return rejected("Pedido negado!")
})

console.log("Aguardando...")

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizada"))