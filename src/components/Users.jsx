import { useState, useEffect } from "react"
import { getUser } from "../utils/api"

const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUser()
      setUsers(res.data)
    }
    fetchUsers()
  }, [users])
  return (
    <div>
     <h1>Users</h1>
    </div>
  )
}

export default Users
