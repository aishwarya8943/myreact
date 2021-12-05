import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';

function App() {
  return (
    
    <div className="App">
      <Greet name ="Bruce" heroname ="Batman" >
      <p>This is children props</p>
      </Greet>
      <Greet name ="Alice"heroname ="Batwomen">
      <button>Action</button>
      </Greet>
      <Greet name ="Santa"heroname ="manstrong"></Greet>
      <Welcome name ="Bruce" heroname ="Batman" />
      <Welcome name ="Alice"heroname ="Batwomen"/>
      <Hello/>
    </div>
  );
}
export default App;
