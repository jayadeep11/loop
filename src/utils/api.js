const apikey = "https://noh.onrender.com/"

export const getUser = async () => {
  const response = await fetch(`${apikey}users`)
  const data = await response.json()
  console.log(data)
  return data
}

export const login = async (email, password) => {
  const response = await fetch(`${apikey}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
  const data = await response.json()
  console.log(data)
  return data
}
