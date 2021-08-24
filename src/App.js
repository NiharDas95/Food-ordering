import './App.css';
import {Route,Switch} from 'react-router-dom';
import Navigation from './components/Navigation/index';
import Catagories from './pages/Catagories/index';
import Orders from './pages/Orders/index';
import Address from './pages/Address/index';
import Header from './components/Header/';
import Listing from './pages/Listing-page/index';
import MyProvider from './common/MyProvider';


function App() {
  return (
    <MyProvider>
      <div>
      
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact key="1">
        <Catagories />
        </Route>
        <Route path="/catagories" key="2">
        <Catagories />
        </Route>
        <Route path="/catagory/:catag" key="3">
        <Listing />
        </Route>
        <Route  path='/orders' key="4">
        <Orders />
        </Route>
        <Route  path='/address' key="5">
        <Address />
        </Route>
        {/* <Route  path='/address123' key="5" render={()=> <h1>Herrrrrrrr</h1>}> */}
        <Route  path='/address123' key="6" children={()=> <h1>Herrrrrrrr</h1>}>
        </Route>
        
      </Switch>
     
      </div>
    </MyProvider>

  );
}

export default App;
