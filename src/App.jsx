import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Explorer from "./pages/Explorer"
import Detail from "./pages/Details"
import { MusicProvider } from "./context/MusicContext"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  const handleAuthChange = () => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  };

  return (
    <MusicProvider>
      <Routes>
        <Route path="/" element={<Login onLoginSuccess={handleAuthChange} />} />
        <Route path="/explorer" element={isLoggedIn ? <Explorer /> : <Navigate to="/" />}></Route>
        <Route path="/details/:id" element={<Detail/>}></Route>
      </Routes>
    </MusicProvider>
  )
}

export default App
