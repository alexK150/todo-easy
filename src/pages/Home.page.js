import React, {useContext, useEffect} from 'react';

import {Form} from "../components/Form.component";
import {Note} from "../components/Note.component";
import {FirebaseContext} from "../context/firebase/firebase-context";
import {Loader} from "../components/Loader.component";

export const Home = () => {
    const {isLoading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, []);

    //temp array
    // const notes = new Array(3)
    //     .fill('')
    //     .map((_, i) => ({id: i, title: `Note #${i + 1}`}));

    return (
        <>
            <Form/>
            <hr/>
            {isLoading
                ? <Loader/>
                : <Note notes={notes} onRemove={removeNote}/>
            }
        </>
    )
};