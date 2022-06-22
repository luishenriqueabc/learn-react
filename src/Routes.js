import { Routes, Route} from 'react-router-dom';
import PaginaHome from './components/pages/paginaHome';
import PaginaContatos from './components/pages/paginaContatos';
import PaginaAdmin from './components/pages/PaginaAdmin';
import EditPontoOnChange from './components/aula/EditPontoOnChange';
import PaginaCommentADM from './components/pages/PaginaCommentADM';
import PaginaFigureAdm from './components/pages/PaginaFigureAdm';
import EditFigureOnChange from './components/aula/EditFigureOnChange';
import PontosFigure from './components/aula/PontosFigure';
import PontosFigure2 from './components/aula/PontosFigure2';
const Routers = () => {
return(
<Routes>
<Route path="/" element={<PaginaHome />} />
<Route path="/contatos" element={<PaginaContatos />} />
<Route path="/admin" element={<PaginaAdmin/>} />
<Route path="edit/:pontosId" element={<EditPontoOnChange />} />
<Route path="commentadm" element={<PaginaCommentADM/>} />
<Route path="figureadm" element={<PaginaFigureAdm/>} />
<Route path="edit/:figureId" element={<EditFigureOnChange />} />
<Route path="Fig:figureId" element={<PontosFigure />} />
<Route path="Fig:figureId" element={<PontosFigure2 />} />
</Routes>          
);
};
export default Routers;