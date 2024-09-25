
import UserContext from "../context/users/UserContext"
import { useContext } from 'react'

const Profile = () => {
  const { selectedUser } = useContext(UserContext)

  return (
    <>
    {selectedUser ? (
      <div className='card card-body text-center'>
        <img src={selectedUser.avatar} alt={selectedUser.first_name} 
        className='card-img-top rounded-circle m-auto img-fluid' style={{width: '150px'}}/>
        <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
        <h3 className="text-truncate">{selectedUser.email}</h3>
      </div>
    ) : <h1>No hay ningun usuario seleccionado</h1>}
    </>
  )
}

export default Profile