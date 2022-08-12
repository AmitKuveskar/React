import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import CounterIncrementBy10 from './Components/CounterIncrementBy10';
import Message from './Components/Message';
import HelloWorld from './Components/HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
<CounterIncrementBy10/>
{/* <Counter/> */}
{/* <Message/>
<HelloWorld name ="Amit"/> */}


      </header>
    </div>
  );
}

export default App;
