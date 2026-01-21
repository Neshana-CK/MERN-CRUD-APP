import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001")
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/deleteUser/" + id)
      .then(() => {
        setUsers(users.filter(user => user._id !== id))
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="page-wrapper">
      <div className="app-card">

        <div className="app-header">
          <h2>User Management</h2>
          <Link to="/create" className="btn btn-success">Add +</Link>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <div className="action-buttons">
                      <Link
                        to={`/update/${user._id}`}
                        className='btn btn-outline-success btn-sm'
                      >
                        Update
                      </Link>
                      <button
                        className='btn btn-danger btn-sm'
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Users
