import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Singin from './pages/Singin'
import Dashboard from './pages/Dashboard'
import Header from './component/Header'
import FooterPage from './component/FooterPage'
import Singup from './pages/Singup'



const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/singin" element={<Singin />}></Route>
        <Route path="/singup" element={<Singup />}></Route>
        <Route path="/DashBoard" element={<Dashboard />}></Route>
      </Routes>
      <FooterPage/>
    </BrowserRouter>
  )
}

export default App
