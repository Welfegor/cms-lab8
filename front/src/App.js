import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import Explore from './components/Explore';
import Notifications from './components/Notifications';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/user/:login" component={User}></Route>
        <Route path="/explore" component={Explore}></Route>
        <Route path="/notifications" component={Notifications}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  )
}

export default App