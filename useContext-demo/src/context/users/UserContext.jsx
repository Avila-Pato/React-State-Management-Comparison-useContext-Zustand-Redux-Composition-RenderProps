

//  CONTEXT permite acceder al estado creado en el componente UserState de aqui se puede usar  en cualquier componente 
//   en este caso se usa en el componente UsersList
import { createContext } from "react"

const UserContext = createContext()

export default UserContext