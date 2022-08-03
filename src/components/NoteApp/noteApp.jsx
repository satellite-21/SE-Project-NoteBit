/* eslint-disable no-unused-vars */
import {useState} from 'react';
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import AddNote from "./addNote"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Full notes body which stores all the notes in the dashboard 

function App(){
    const [notes, setNotes] = useState([]);
    function addNote(note){
        setNotes(previousNotes =>{
           return  [...previousNotes, note];
           // Adding notes in the previous notes and returning.
        });
    }

    function deleteNote(id){
        setNotes(previousNotes =>{
            return previousNotes.filter((note, index)=>{
                return index !== id;
                // returns array with all the id's except id parameter.
            });
        });
    }
    function notesFullBody(note, index){
        return <Note key = {index} id = {index} title = {note.title} content = {note.content} deadline = {note.deadline} onDelete = {deleteNote}></Note>
        // function used to map function to the notes.
    }
    return <div>
        <Header></Header>
        {notes.map(notesFullBody)}
        <AddNote onSave = {addNote}></AddNote>
        <Footer></Footer>
    </div>
}

export default App