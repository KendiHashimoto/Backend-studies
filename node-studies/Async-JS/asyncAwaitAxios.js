import axios from "axios"

async function fetchRepos() {
  const url = "https://api.github.com/users/KendiHashimoto"
  const user = await axios.get(url)
  const repos = await axios.get(user.data.repos_url)
  console.log(repos.data)
}

fetchRepos().catch((e) => console.log(e))