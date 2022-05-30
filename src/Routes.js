import { Routes, Route} from 'react-router-dom';
import PaginaHome from './components/pages/paginaHome';
import PaginaContatos from './components/pages/paginaContatos';
import PaginaCreate from './components/pages/PaginaCreate';
import EditPontoOnChange from './components/aula/EditPontoOnChange';

const Routers = () => {
    return(
    <Routes>
        <Route path="/" element={<PaginaHome />} />
        <Route path="/contatos" element={<PaginaContatos />} />
        <Route path="/create" element={<PaginaCreate/>} />
        <Route path="edit/:pontosId" element={<EditPontoOnChange />} />

    </Routes>          
    );
};

export default Routers;