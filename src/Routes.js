import { Routes, Route} from 'react-router-dom';
import PaginaHome from './components/pages/paginaHome';
import PaginaContatos from './components/pages/paginaContatos';
import PaginaAdmin from './components/pages/PaginaAdmin';
import EditPontoOnChange from './components/aula/EditPontoOnChange';
import PaginaCommentADM from './components/pages/PaginaCommentADM';
import PaginaFigureAdm from './components/pages/PaginaFigureAdm';
import EditFigureOnChange from './components/aula/EditFigureOnChange';
import PaginaPontoUm from './components/pages/PaginaPontoUm';
import APIIntegrationPagpontos from './components/aula/APIIntegrationPagPontos';
import EditPagOnChange from './components/aula/EditPagOnChange';
const Routers = () => {
return(
<Routes>
<Route path="/" element={<PaginaHome />} />
<Route path="/contatos" element={<PaginaContatos />} />
<Route path="/admin" element={<PaginaAdmin/>} />
<Route path="/edit/:pontosId" element={<EditPontoOnChange />} />
<Route path="/commentadm" element={<PaginaCommentADM/>} />
<Route path="/figureadm" element={<PaginaFigureAdm/>} />
<Route path="/figureadm/edit/:figureId" element={<EditFigureOnChange />} />
<Route path="/pagp:paginapontosId" element={<PaginaPontoUm />} />
<Route path="/paginaadm" element={<APIIntegrationPagpontos />} />
<Route path="/pagadm/edit/:paginaId" element={<EditPagOnChange />} />


</Routes>          
);
};
export default Routers;