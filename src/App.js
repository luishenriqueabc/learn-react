
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes, Route} from "react-router-dom";
// import APIIntegration from './components/aula/APIIntegration';



function App() {
  return ( 
  <>
    <Header />
    <Main />
    {/* <Routes>
      <Route path="/" element={<APIIntegration />} />
    </Routes> */}
  </>
         )
};
export default App;
