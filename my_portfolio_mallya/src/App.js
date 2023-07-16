import './App.css';
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignInPage/>} />
      </Switch>
    </Router>
  );
}

export default App;
