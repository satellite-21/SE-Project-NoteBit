import {useState} from 'react';
function AddNote(props){
    // Adding states for storing the data provided in the note
    const [noteText, setNoteText] = useState('');
    const [noteHead, setNoteHead] = useState('');
    const [noteDeadline, setNoteDeadline] = useState('');
    const handleChangeText = (event) =>{
        setNoteText(event.target.value);
        // Sets note's text given by user
    }
    const handleChangeHead = (event) =>{
        setNoteHead(event.target.value);
        // Sets note's head given by user
    }
    const handleChangeDeadline = (event) =>{
        setNoteDeadline(event.target.value);
    } 
       // Function to add note in the dashboard
    function submitNote(){
        const note = {title:noteHead , content:noteText, deadline : noteDeadline}
        props.onSave(note)
        setNoteText('');
        setNoteHead('');
        setNoteDeadline('');
    }
    // returns a note
    return (<div className = "addNote">
        <h1><textarea placeholder="Heading" onChange={handleChangeHead} value = {noteHead}></textarea></h1>
        <h1><textarea placeholder="Add Note...."rows = "6" columns = "8" onChange={handleChangeText} value = {noteText}></textarea></h1>
        <h1><textarea placeholder="Deadline" onChange={handleChangeDeadline} value = {noteDeadline}></textarea></h1>
        <button className = "save" role = "button" onClick = {submitNote}>Save</button>
    </div>)
}

export default AddNote;
