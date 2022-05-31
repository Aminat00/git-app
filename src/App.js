import logo from './logo.svg';
import './App.css';
import madina from './images/madina.jpg';
import PrimarySearchAppBar from './PrimarySearchAppBar';

function App() {
  return (
    <div className="App">
    <PrimarySearchAppBar/>
      <img src={madina}/>
    </div>
  );
}

export default App;
