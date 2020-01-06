import React from 'react';
import {Form} from "../components/Form.component";
import {Note} from "../components/Note.component";

export const Home = () => {
    const notes = new Array(3)
        .fill('')
        .map((_, i) => ({id: i, title: `Note #${i + 1}`}));

    return (
        <>
            <Form/>
            <hr/>
            <Note notes={notes}/>
        </>
    )
};