import React from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
// import DeleteOutlineIcon from 'mui/icons-material/DeleteOutline';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {

    const deleteItemm = () => {
        props.onDelete(props.id);
    }

    return (
        <>
            <div className='note' >
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <button onClick = {deleteItemm} className="btn" >
                    <DeleteOutlineIcon className="deleteIcon" />
                </button>
            </div>
        </>
    );
};

export default Note;