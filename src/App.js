import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home"
import Account from './pages/Account'
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ProtectRoute from "./component/ProtectRoute";
import './style/app.scss'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/account" element={<ProtectRoute><Account/></ProtectRoute>}></Route>
        <Route path="/login" element={<LogIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      </HashRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
