import logo from './logo.svg';
import './App.css';
import madina from './images/madina.jpg';
import HeaderMenu from './HeaderMenu';

function App() {
  return (
    <div className="App">
    <HeaderMenu/>
      <img src={madina}/>
    </div>
  );
}

export default App;
