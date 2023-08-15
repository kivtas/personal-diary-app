import './App.css';
import Navbar from'./Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1><Home /></h1>
      </div>
    </div>
  );
}

export default App;
