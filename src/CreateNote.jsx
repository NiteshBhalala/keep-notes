import React, { useState } from "react";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const expandIt = () => {
        setExpand(true);
    }

    const backToNormal = () => {
        setExpand(false);
    }

    const [note, setNote] = useState({
        title: "",
        content:"",
    })

    const InputEvent = (event) =>{
        const {name,value} = event.target;
        setNote((preValue)=>{
            return {
                ...preValue,
                [name] : value,
            }
        })
    }

    const addEvent = (event) => {
        props.passNote(note);
        event.preventDefault();
        setNote({
            title: "",
            content:"",
        });
    }

    return (
        <>
            <div className="main_note" onDoubleClick={backToNormal}>
                <form>
                    {expand?
                    <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title"/> : null}
                    <textarea onClick={expandIt}  rows="" columns="" name="content" value={note.content} onChange={InputEvent}  placeholder="Write a note"></textarea>
                    {expand?
                    <button onClick={addEvent} ><span className="plusBtn">+</span></button>:null}
                </form>
            </div>
        </>
    )
}

export default CreateNote;