import React, { useState, useEffect } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Note from "./Note";

const getLocalItems = () => {
    let list = localStorage.getItem("list");
    if(list){
        return JSON.parse(localStorage.getItem("list"));
    }
    else{
        return [];
    }
}

const App = () => {
    const [addItem, setAddItem] = useState(getLocalItems());
    const addNote = (note) => {
        setAddItem((preValue) => {
            return [...preValue,  note];
        })
    };

    const deleteItem = (id) => {
        setAddItem((oldVal) =>
            oldVal.filter((curVal, index) => {
                return index !== id;
            })
        );
    };

    useEffect(()=>{
        localStorage.setItem("list", JSON.stringify(addItem));
    }, [addItem]);

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