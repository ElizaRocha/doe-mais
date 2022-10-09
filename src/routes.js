import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "./App"
import Header from "./components/Header"
import Create from "./pages/Create"
import Erro from "./pages/Erro"
import Home from "./pages/Home"
import Login from "./pages/Login"


function RoutesApp() {
    return(

       <BrowserRouter>
        
        <Header/>
         <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/create" element={<Create/>}/>


               <Route path="*" element={<Erro/>}/>
         </Routes>
       
       
       </BrowserRouter>

    )
}

export default RoutesApp