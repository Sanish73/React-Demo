import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo'
import Modal from './component/Modal';
import Backdrop from './component/Backdrop';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Todo text='Learn React'/>
      <Todo text='Explore React'/>
      <Todo text='Creact React Project'/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
