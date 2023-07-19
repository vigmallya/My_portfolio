import './App.css';
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin'
import ErrorPageSection from './components/ErrorPageSection/404Page';
import { ErrorObj } from './components/ErrorPageSection/data';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/error_404" element={<ErrorPageSection {...ErrorObj}/>} />
      </Switch>
    </Router>
  );
}

export default App;
