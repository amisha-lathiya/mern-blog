import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Singin from './pages/Singin'
import Dashboard from './pages/Dashboard'
import Singup from './Singup'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sing-in" element={<Singin />}></Route>
        <Route path="/sing-up" element={<Singup />}></Route>
        <Route path="/DashBoard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
