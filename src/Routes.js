import { Routes, Route} from 'react-router-dom';
import PaginaHome from './components/pages/paginaHome';
import PaginaContatos from './components/pages/paginaContatos';
import PaginasADM from './components/pages/PaginasADM';
import EditPontoOnChange from './components/aula/EditPontoOnChange';
import PaginaCommentADM from './components/pages/PaginaCommentADM';
import PaginaFigureAdm from './components/pages/PaginaFigureAdm';
import EditFigureOnChange from './components/aula/EditFigureOnChange';
import APIIntegrationPagpontos from './components/aula/APIIntegrationPagPontos';
import EditPagOnChange from './components/aula/EditPagOnChange';
import PaginaPontoUm from './components/pages/PaginaPontoUm';
import PaginaPontoDois from './components/pages/PaginaPontoDois';
import PaginaPontoTres from './components/pages/PaginaPontoTres';
import PaginaPontoQuatro from './components/pages/PaginaPontoQuatro';
import PaginaAdmin from './components/pages/PaginaAdmin';

const Routers = () => {
return(
<Routes>
<Route path="/" element={<PaginaHome />} />
<Route path="/home" element={<PaginaHome />} />
<Route path="/contatos" element={<PaginaContatos />} />
<Route path="/edit/:pontosId" element={<EditPontoOnChange />} />
<Route path="/commentadm" element={<PaginaCommentADM/>} />
<Route path="/figureadm" element={<PaginaFigureAdm/>} />
<Route path="/figureadm/:figureId" element={<EditFigureOnChange />} />
<Route path="/paginaadm" element={<APIIntegrationPagpontos />} />
<Route path="/admpagina/:PaginaPontosId" element={<EditPagOnChange />} />
<Route path="/pag1:paginapontosId" element={<PaginaPontoUm />} />
<Route path="/pag4:paginapontosId" element={<PaginaPontoDois />} />
<Route path="/pag2:paginapontosId" element={<PaginaPontoTres />} />
<Route path="/pag3:paginapontosId" element={<PaginaPontoQuatro />} />
<Route path="/admin" element={<PaginasADM/>} />
<Route path="/pontosadm"element={<PaginaAdmin/>} />


</Routes>          
);
};
export default Routers;