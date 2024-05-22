import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './componets/Login'
import Profile from './componets/Profile'

function App() {
  

  return (
    <UserContextProvider>
     <Login/> 
     <Profile/>
    </UserContextProvider>
  )
}

export default App
