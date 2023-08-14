import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Cadastro } from "../pages/cadastro/Cadastro";
import App from "../App";
import { FormCliente } from "../components/formCliente/FormCliente";
import { FormClienteEndereco } from "../components/formEndereco/FormEndereco";

export const MyRoute = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<App/>}/>
                <Route path="/cadastro/cliente" element={<Cadastro><FormCliente/></Cadastro>}/>
                <Route path="/cadastro/cliente/endereco" element={<Cadastro><FormClienteEndereco/></Cadastro>}/>
            </Routes>
        </Router>
    )
}