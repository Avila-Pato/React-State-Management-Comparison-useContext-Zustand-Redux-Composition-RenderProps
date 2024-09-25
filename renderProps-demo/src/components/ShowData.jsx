

const ShowData = ({ users }) => {
    console.log(users)
  return (
    <>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.UserName}</h2>
          <h2>{user.id}</h2>
        </div>
      ))}
    </>
  )
}

export default ShowData