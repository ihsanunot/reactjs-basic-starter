// third party
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

// css
import './App.css';

// componet
import Menu from './components/Menu';


// pages
import Home from './pages/Home';
import Admin from './pages/Admin';
import Genres from './pages/Genres';
import Movies from './pages/Movies';
import ShowMovie from './pages/Movies/Show';


function App() {

  return (
    <Router>
    <div className="container">
          <div className="row">
            <h1 className="mt-3">GoReact Movie Project</h1>
            <hr className="mb-3"/>
          </div>
    <div className="row">
    <div className="col-2">
        <Menu/>
    </div>
  <div className="col-10">
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route exact path='/movies/:id' element={ <ShowMovie /> }/> 
      <Route path='/movies' element={ <Movies /> }/>
      <Route path='/genres' element={ <Genres /> }/>
      <Route path='/admin' element={ <Admin /> }/>
    </Routes>
  </div>
      </div>
        </div>
    </Router>
  );
}

export default App;
