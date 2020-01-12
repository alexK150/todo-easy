import React, {useContext, useEffect} from 'react';

import {Form} from '../components/Form.component';
import {Note} from '../components/Note.component';
import {FirebaseContext} from '../context/firebase/firebase-context';
import {Loader} from '../components/Loader.component';

export const Home = () => {
    const {isLoading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, []);

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