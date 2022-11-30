// -> Middleware app.use(express.json())

// let author = "Kendi"

// * GET
// app.route("/").get((req, res) => res.send("hello"))

// * POST
// app.route("/").post((req, res) => res.send(req.body))

// * PUT
// app.route("/").put((req,res) => {
// author = req.body.author
// res.send(author)
// })

// * DELETE
// app.route("/:identificador").delete((req, res) => {
// author = ""
// res.send(req.params.identificador) // -> Params : variável pela url / rota.
// })

// * BODY PARAMS
// app.route("/").post((req, res) => {
// const { nome, cidade } = req.body
// res.send(`Meu nome é ${nome} e minha cidade é ${cidade}`)
// })

// * ROUTE PARAMS
// app.route("/").get((req, res) => res.send("oi"))
// app.route("/:variavel").get((req, res) => res.send(req.params.variavel))
// app.route("/:identidade/:name").get((req, res) => res.send(req.params.name))

// * QUERY PARAMS -> Mandar parâmetros para dentro da URL com variáveis que são criadas diretamente no request.
// app.route("/").get((req, res) => res.send(req.query.name))
// app.route("/about/user").get((req, res) => res.send(req.query))

const express = require("express")
const axios = require("axios")

const app = express()

app.listen("3000")

app.route("/").get((req, res) => {
  axios.get('https://api.github.com/users/KendiHashimoto')
  .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
  .catch(error => console.log.error(error))
})
