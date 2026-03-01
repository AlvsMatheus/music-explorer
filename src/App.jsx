import { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Explorer from "./pages/Explorer"
import Detail from "./pages/Details"
import { MusicProvider } from "./context/MusicContext"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener('storage', checkLogin);
    return () => window.removeEventListener('storage', checkLogin);
  }, []);

  return (
    <MusicProvider>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/explorer" element={isLoggedIn ? <Explorer /> : <Navigate to="/" />}></Route>
        <Route path="/details/:id" element={<Detail/>}></Route>
      </Routes>
    </MusicProvider>
  )
}

export default App
