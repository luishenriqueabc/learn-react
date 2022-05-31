
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './Routes';
import {BrowserRouter as Router} from "react-router-dom";



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
