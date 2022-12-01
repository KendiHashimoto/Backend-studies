const url = "http://localhost:5500/api" // -> live server

// * GET
function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.error(error))
}

function getUser() {
  fetch(`${url}/1`)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch((error) => console.error(error))
}

// * POST
function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response = response.json()))
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.log(error))
}

const newUser = {
  name: "Kendi Hashimoto",
  avatar: "https://github.com/KendiHashimoto.png",
  city: "Castanhal",
}

addUser(newUser)

// * PUT
function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.log(error))
}

const updatedUser = {
  name: "Josefina Josefa",
  avatar: "https://picsum.photos/200/300",
  city: "Recife",
}

// * DELETE
function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.log(error))
}

updateUser(updatedUser, 1)
deleteUser(1)
getUsers()
getUser()
