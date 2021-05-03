import "./App.css"
import Console from "./components/Console";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import VerticalLinks from "./components/VerticalLinks";

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/'/>
        </Switch>
      </Router>
     
      <Console />
      
      
      <VerticalLinks/>
    </>
  );
};

export default App;