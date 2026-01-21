import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:3001/createUser", {
      name,
      email,
      age
    })
      .then(() => {
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <form onSubmit={Submit}>
          <h2 className="mb-4">Add User</h2>

          <div className='mb-3'>
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-end">
            <button className='btn btn-success'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
