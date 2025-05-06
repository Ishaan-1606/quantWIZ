import './App.css'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Chat from './pages/Chat'
import { useAuth } from './context/AuthContext'

function App() {
  const auth=useAuth();
  return (
    <main>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        {auth?.isLoggedIn && auth.user && (<Route path='/chat' element={<Chat/>}/>)}
      </Routes>
    </main>
  )
}

export default App
