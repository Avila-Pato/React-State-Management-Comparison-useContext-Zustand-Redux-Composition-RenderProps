import { GET_USERS, GET_PROFILE } from '../types';

const userReducer = (state, action) => {
  //Payload los datos que se pasan a la accion
  const { payload, type } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload // retorna el estado actualizado
      }
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload
      }
      //  si no  existe la accion retorna el estado actualizado
    default:
      return state
  }
}

export default userReducer;
