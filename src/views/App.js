import '../style/App.scss';
import './Example01';
import Example02 from './Example02';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './Navbar/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Example01  from './Example01';
import Home from './Home';
import Users from './User/Users';
import DetailUser from './User/DetailUser';
//import { Example01 } from './Example01';

function App() {
  return (
    <>
      <div id='container'>
        <Router>

          <Navbar />
          <br/>
          <Switch>
            <Route path="/" exact> <Home/> </Route>
              <Route path="/example01"> <Example01/> </Route>
              <Route path='/example02'> <Example02/> </Route>
              <Route path='/users' exact> <Users /> </Route>
              <Route path='/users/:id'> <DetailUser /> </Route>
          </Switch>

        </Router>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
