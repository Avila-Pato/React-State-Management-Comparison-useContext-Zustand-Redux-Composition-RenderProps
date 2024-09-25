import './App.css'
import Profile from './components/Profile'
import UsersList from './components/UsersList'


//CONTEXT 
import UserState from './context/users/UserState'
// Boostrap
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <UserState>

    <div className='container p-4'>
      <div className='row'>
        <div className='col-md-7'>
          <UsersList />
        </div>
        <div className='col-md-5'>
          <Profile />
        </div>
      </div>
    </div>
    
    </UserState>
  )
}

export default App
