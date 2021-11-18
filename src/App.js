import logo from './images/giphy.gif';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '../src/component/login';

function App() {
  return (
      <>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo rounded-circle pb-5" alt="logo" />
            <p className='display-6 pt-3 pb-3'>
              Edwald Web Page
            </p>
            <Link to='/login' className='badge bg-black rounded-pill btn-outline-primary ps-5 pe-5 pt-3 pb-3' style={{textDecoration:'none'}}>Login</Link>
          </header>
        </div>

        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
