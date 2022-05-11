
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './Routes';
import {BrowserRouter as Router} from "react-router-dom";
// import APIIntegration from './components/aula/APIIntegration';
// import EditUserOnChange from './components/aula/EditUserOnChange'



function App() {
  return ( 
  <>

    <Router>
      <Routers/>
    </Router>

  </>
         )
};
export default App;
