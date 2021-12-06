import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    
    <div className="App">
      <Counter/>
      <Message/> 
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
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      
    </div>
  );
}
export default App;
