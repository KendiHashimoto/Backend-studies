// Callback -> Chame de volta, estou enviando tal função como argumento e depois 
// de algumas tarefas ela irá chamar essa função de volta.

function imprimirDado(dado) {
  console.log("outras tarefas")
  console.log(dado())
}

imprimirDado(function () {
  return "Olá mundo"
})
