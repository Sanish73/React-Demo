import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo'

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Todo text='Learn React'/>
      <Todo text='Explore React'/>
      <Todo text='Creact React Project'/>
    </div>
  );
}

export default App;
