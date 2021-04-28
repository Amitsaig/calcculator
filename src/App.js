import './App.css';
import Calculator from './components/calc'
import Socials from './components/socials'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calulator</h1>
        <Calculator/>
        <Socials/>
      </header>
    </div>
  );
}

export default App;
