import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Explorer from "./pages/Explorer"
import Detail from "./pages/Details"
import { MusicProvider } from "./context/MusicContext"

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

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
