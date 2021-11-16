import './app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error404 from "./pages/Error404";
import Authentication from './pages/Authentication';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ProfileAbstractCard from './components/ProfileAbstractCard';
import NextsCard from './components/NextsCard';
import Accounts from './components/Accounts';
import Statistics from './pages/statistics';
import Profile from './pages/profile';
import CreateAccounts from './pages/CreateAccounts';
import CustomAlert from './components/CustomAlert';

function App() {
  
  return (
    
      <Router>
        
        <Switch>
          <Route exact path='/'>
            <Authentication action="login"/>
          </Route>

          <Route exact path='/register'>
            <Authentication action="register"/>
          </Route>

          <Route exact path='/menu'>
            <div className="content">
              <Header />
              <div className="body">
                <NavBar />
                <div className="nexts-cards-container"> 
                  <NextsCard accountType="positive"/>
                  <NextsCard accountType="negative"/>
                </div>
              </div>
            </div>
          </Route>

          <Route path='/contasapagar'>
            <div className="content">
              <Header />
              <div className="body">
                <NavBar />
                <Accounts accountType="pendant"/>
              </div>
            </div>   
          </Route>

          <Route path='/constaspagas'>
            <div className="content">
              <Header />
              <div className="body">
                <NavBar />
                <Accounts accountType="finish"/>
              </div>
            </div>   
          </Route>

          <Route path='/criarcontas'>
            <div className="content">
              <Header />
              <div className="body">
                <NavBar />
                <CreateAccounts />
              </div>
            </div>   
          </Route>

          <Route path='/estatisticas'>
            <div className="content">
              <Header />
              <div className="body">
                <NavBar />
                <Statistics />
              </div>
            </div>   
          </Route>

          <Route path='/perfil'>
            <div className="content">
              <Header />
              <div className="body">
                <Profile />
              </div>
            </div>   
          </Route>

          <Route>
            <Error404 />
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
