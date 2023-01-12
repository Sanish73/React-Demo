function Modal(props){

    function cancleHandler(){
        props.onCancle();
    }
    function confirmHandler(){
        props.onConfirm();
    }
return <div className="modal">
    <p>Are you sure?</p>
    <button className="btn btn--alt" onClick={props.onCancle} >Cancel</button>
    <button className="btn" onClick={props.onConfirm}>Confirm</button>
</div>
}

export default Modal