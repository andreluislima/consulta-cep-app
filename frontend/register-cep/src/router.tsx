import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NovoRegistro from "./pages/NovoRegistro/NovoRegistro";

export default function MainRoutes(){
    return(
        <Routes>
             <Route path="/" element = {<Home />}  />
             <Route path="/novo-registro" element = {<NovoRegistro/>} />
        </Routes>
    )
}