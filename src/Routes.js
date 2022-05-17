import { Routes, Route} from 'react-router-dom';
import PaginaHome from './components/pages/paginaHome';
import PaginaContatos from './components/pages/paginaContatos';

const Routers = () => {
    return(
    <Routes>
        {/* <Route path="/" element={<PaginaHome />} /> */}
        <Route path="/contatos" element={<PaginaContatos />} />
    </Routes>          
    );
};

export default Routers;