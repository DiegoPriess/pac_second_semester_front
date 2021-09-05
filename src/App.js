import NavBar from "./components/NavBar";
import Error404 from "./components/Error404";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    
      <Router>

        <NavBar />

        <Switch>
          <Route exact path='/'>
           
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
