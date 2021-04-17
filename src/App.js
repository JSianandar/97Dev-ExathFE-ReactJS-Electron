import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateTask from './CreateTask';
import EditTask from './EditTask';


function App() {
  
  const title = "Welcome to Exath FE Testing";
  const welcome = "Welcome, Bluu#1234";
  const totaltasks = Math.random() * 10;
  const runningtasks = Math.random() * 10;
  const link = "https://docs.exath.io/";


  return (
    <Router>
        <div className="App">
            <Navbar />
            <div className="content">
                <h1>{title}</h1>
                <p>Tasks - {totaltasks}</p>
                <p>Running Tasks - {runningtasks}</p>
                <p>test</p>

                <a href ={link}>Exath Site </a>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/createTask">
                        <CreateTask />
                    </Route>
                    <Route path="/sites/:id">
                        <EditTask />
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>
  );
}

export default App;
