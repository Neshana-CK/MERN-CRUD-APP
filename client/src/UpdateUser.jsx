import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3001/getUser/" + id)
      .then(result => {
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
      })
      .catch(err => console.log(err))
  }, [id])

  const Update = (e) => {
    e.preventDefault()

    axios.put("http://localhost:3001/updateUser/" + id, {
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
        <form onSubmit={Update}>
          <h2 className="mb-4">Update User</h2>

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
            <button className='btn btn-success'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
