//Definicion del estado
import { useReducer } from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import axios from 'axios'

const UserState = (props) => {

  // Estado Inicial 
  const InicialUserState = {
    users: [], // users: [] deuelve un arreglo de usuarios
    selectedUser: null  // selectedUser: null deuelve un solo usuario
  }

  // useReducer permite modificar el estado del componente segun la accion
  // La forma en que el estado se actualiza depende de las acciones y su tipo que envíes a través de dispatch
  const [state, dispatch] = useReducer(UserReducer, InicialUserState)

  // getUser lleala los campos usrs: [],
  const getUsers = async () => {
    await axios.get('https://reqres.in/api/users')
    .then(res => {
      dispatch({
        type: 'GET_USERS',
        payload: res.data.data
      })
    })
    .catch(err => console.log(err))
  }
  
  // egtProfile llenara los selectedUser: null
  const getProfile = async (id) => {
  await axios.get(`https://reqres.in/api/users/${id}`)
    .then(res => {
      dispatch({
        type: 'GET_PROFILE',
        payload: res.data.data
      })
    })
    .catch(err => console.log(err))

  }

  return (
    <UserContext.Provider value={
      {
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile
      }
    }>
        {props.children}
    </UserContext.Provider>
  )
}


export default UserState