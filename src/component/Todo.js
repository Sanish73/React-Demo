import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo(props){
    const [modelToCheck ,  modelToOpen] = useState(false);
   
    function deleteHandler(){
       modelToOpen(true)
    }
return(
    <div className="card">
        <h2>{props.text}</h2>
        <div className='actions'>
        <span>Hey</span>
            <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {modelToCheck ? <Modal /> : null}
        {modelToCheck ? <Backdrop /> : null}
      </div>
)
}

export default Todo;