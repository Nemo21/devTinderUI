import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={user.photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.firstName+ " "+ user.lastName}</h2>
    <p>{user.about}</p>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary">Pass</button>
      <button className="btn btn-secondary">Smash</button>
    </div>
  </div>
</div>
  )
}

export default UserCard