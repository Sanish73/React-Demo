function Todo(props){
return(
    <div className="card">
        <h2>{props.text}</h2>
        <div className='actions'>
        <span>Hey</span>
            <button className='btn'>Delete</button>
        </div>
      </div>
)
}

export default Todo;