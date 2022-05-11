import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Note from "./Note";

const App = () => {
    const [addItem, setAddItem] = useState([]);
    const addNote = (note) => {
        setAddItem((preValue) => {
            return [...preValue, note];
        })
    };

    const deleteItem = (id) => {
        setAddItem((oldVal) =>
            oldVal.filter((curVal, index) => {
                return index !== id;
            })
        );
    };

    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />


            {addItem.map((val, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        onDelete={deleteItem}
                    />
                );
            })}
            <Footer />
        </>
    )
}

export default App;