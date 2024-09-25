
import UserContext from './../context/users/UserContext';
import { useContext } from 'react';
import { useEffect } from 'react';


const UsersList = () => {
 const { users, getUsers, getProfile } = useContext(UserContext)

 useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    // llamando los datos creando una lista usando Boostrap
<div className='list-group h-100'>
  {
    users.map(user => (
      <a className='list-group-item list-group-item-action d-flex flex-row justify-content-start '
        key={user.id}
        // mostrando el id de usuario al ahcer click en el usuario por la consola
        onClick={() => getProfile(user.id)}
      >
        <img src={user.avatar} alt={user.first_name} className='img-img-fluid mr-4 rounded-circle ' />
        <p>{`${user.first_name} ${user.last_name}`}</p>
        
      </a>
    ))
  }
</div>


   
  )

}

export default UsersList