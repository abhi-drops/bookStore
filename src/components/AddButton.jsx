import React from 'react'
import { Link } from 'react-router-dom'

function AddButton() {
  return (
    <>
      <div className=' fixed bottom-5 right-5'>
        <Link to={"/add"}>
        <button className="btn btn-success">Add New +</button>
        </Link>
      </div>
    </>
  )
}

export default AddButton