import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  
  const title = "Welcome to Exath FE Testing";
  const welcome = "Welcome, Bluu#1234";
  const totaltasks = Math.random() * 10;
  const runningtasks = Math.random() * 10;
  const link = "https://docs.exath.io/";


  return (
    <div className="App">
        <Navbar />
        <Home />
        <div className="content">
            <h1>{title}</h1>
            <p>Tasks - {totaltasks}</p>
            <p>Running Tasks - {runningtasks}</p>

            <a href ={link}>Exath Site </a>
            
        </div>
    </div>
  );
}

export default App;
