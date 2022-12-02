const url = "https://localhost:5500/api"

// * GET
function getUsers() {
  axios
    .get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch((error) => console.log(error))
}

// * GET WITH PARAMS
function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then((response) => {
      const data = response.data
      userName.textContent = data.name
      userCity.textContent = data.city
      userId.textContent = data.id
      userAvatar.src = data.avatar
    })
    .catch((error) => console.log(error))
}

// * POST
function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
}

const newUser = {
  name: "Kendi Hashimoto",
  avatar: "https://picsum.photos/200/300",
  city: "Castanhal",
}

// * UPDATE
function updateUser(id, userUpdated) {
  axios
    .put(`${url}/${id}`, userUpdated)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
}

const userUpdated = {
  name: "Josefins Sans",
  avatar: "https://picsum.photos/200/300",
  city: "Belém",
}

// * DELETE
function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
}

getUsers()
getUser(1)
addNewUser(newUser)
updateUser(2, userUpdated)
deleteUser(3)
