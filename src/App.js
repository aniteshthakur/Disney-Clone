import Home from "./components/Home"
import './App.css';
import {Route,Switch} from "react-router-dom"
import Detail from "./components/Detail"
import Login from "./components/Login"
import Header from "./components/Header"
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
 
    </div>
  );
}

export default App;
