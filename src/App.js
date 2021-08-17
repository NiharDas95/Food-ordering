import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navigation from './components/Navigation/index';
import Catagories from './pages/Catagories/index';
import Listing from './pages/Listing-page/index';
import Orders from './pages/Orders/index';
import Address from './pages/Address/index';
import Header from './components/Header/index';


function App() {
  return (
      <div>
      
      <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact key="1">
        <Catagories />
        </Route>
        <Route path="/catagories" exact key="1">
        <Catagories />
        </Route>
        <Route path="/item" key="2">
        <Listing />
        </Route>
        <Route  path='/orders' key="3">
        <Orders />
        </Route>
        <Route  path='/address' key="4">
        <Address />
        </Route>
        
      </Switch>
      </Router>
     
      </div>
  );
}

export default App;
