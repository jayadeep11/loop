import { useState, useEffect } from "react"
import { getUser } from "../utils/api"

const Users = () => {
  const [users, setUsers] = useState([]) // Default empty array
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUser()
        console.log('API response:', res) // Log the full response
        setUsers(res) // Set the correct part of the response
      } catch (error) {
        console.error("Error fetching users:", error)
        setError("Failed to fetch users")
      } finally {
        setLoading(false) // Ensure loading is false once done
      }
    }
    fetchUsers()
  }, [])

  if (loading) {
    return <p>Loading users...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="flex text-white flex-col items-center gap-10 justify-center h-screen">
      {users && users.length > 0 ? (
        users.map((user, index) => (
          <div key={index}>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  )
}

export default Users

