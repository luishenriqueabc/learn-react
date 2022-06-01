import { Routes, Route} from 'react-router-dom';
import PaginaHome from './components/pages/paginaHome';
import PaginaContatos from './components/pages/paginaContatos';
import PaginaCreate from './components/pages/PaginaCreate';
import EditPontoOnChange from './components/aula/EditPontoOnChange';
import PaginaCommentADM from './components/pages/PaginaCommentADM';

const Routers = () => {
    return(
    <Routes>
        <Route path="/" element={<PaginaHome />} />
        <Route path="/contatos" element={<PaginaContatos />} />
        <Route path="/create" element={<PaginaCreate/>} />
        <Route path="edit/:pontosId" element={<EditPontoOnChange />} />
        <Route path="commentadm" element={<PaginaCommentADM/>} />

    </Routes>          
    );
};

export default Routers;