function Note(props){

    const handleClick = (event) =>{
        props.onDelete(props.id);
    }
    // A simple note function storing details of a simple note.
    return <div className="noteBody">
    <h1>{props.title}</h1>
    <br></br>
    <p>
    {props.content}
    </p>
    <br></br>
    <b><small className="deadline">{props.deadline}</small></b>
    <br></br>
    <br></br>
    <button className="save" onClick={handleClick}>Delete</button>
    </div>;
} 

export default Note;