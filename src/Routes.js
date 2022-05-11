import { Routes, Route} from 'react-router-dom';
import PaginaHome from './components/pages/paginaHome';
import Form from './components/Form'


const Routers = () => {
    return(
    <Routes>
        <Route path="/" element={<PaginaHome />} />
    </Routes>          
    );
};

export default Routers;