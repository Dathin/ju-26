import logo from './photo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Parabéns Ju!!!
        </p>
        <p>
          🥷 ❤️
        </p>
        <a href={'ifood://redeem_ifood_card?cardNumber=6398210091729591186619013'}>
          Clique aqui para surpresinha
        </a>
      </header>
    </div>
  );
}

export default App;
