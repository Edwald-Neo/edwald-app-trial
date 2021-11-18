import logo from '../images/fire-ball.gif';
import '../App.css';
import App from '../App';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
            <img src={logo} className="rounded-circle pb-5" alt="logo" />
            <h1 className='display-3'>User Login</h1>
            <label className=''>User ID</label>
            <input className='' placeholder='User ID'/>
            <button type='submit' className='badge bg-black rounded-pill btn-outline-primary ps-5 pe-5 pt-3 pb-3'>Login</button>
        </form>
        
      </header>
    </div>
  );
}

export default Login;
