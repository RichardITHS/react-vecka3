import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.tsx'
import About from './pages/About'
import Products from './pages/Products'
import ErrorPage from './pages/ErrorPage'
import { UserInfo } from './UserInfo'


function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
            </nav>
             <UserInfo.Provider value={"Richard"}>
            <Routes>
                <Route path="/" element={ <Home firstname={"Richard"} counter={1} />} />
                {/*             <Route path="/" element={<div><h1>Hej du har kommmit hem</h1></div>} />

 */}
                <Route path="/about" element={<About />} />
                <Route path="/products/:id" element={<Products />} />
                {/* Vi lägger en stjärna i path för att komma till en bestämd sida om ej url finns */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            </UserInfo.Provider>
        </>
    )
}

export default App
