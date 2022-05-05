
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Routes, Route} from "react-router-dom";
// import APIIntegration from './components/aula/APIIntegration';
// import EditUserOnChange from './components/aula/EditUserOnChange'



function App() {
  return ( 
  <>
  <Header />
  <Main />
  {/* <Routes>
  <Route path="/" element= {<APIIntegration/>} />
  <Route path="edit/:userId" element={<EditUserOnChange />} />
  </Routes> */}
  </>
         )
};
export default App;
