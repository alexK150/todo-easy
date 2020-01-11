import React, {useReducer} from 'react';
import axios from 'axios';

import {FirebaseContext} from "./firebase-context";
import {firebaseReducer} from "./firebase.reducer";
import ActionTypes from "../alert.types";

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    };
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: ActionTypes.SHOW_LOADER});

    const fetchNotes = async () => {
        showLoader();
        const res = await axios.get(`${url}/notes.json`)
    };

    const addNote = async title => {
        const note = {
            title, date: new Date().toJSON()
        };

        const res = await axios.post(`${url}/notes.json`, note)
    };

    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`);

        dispatch({
            type: ActionTypes.REMOVE_NOTE,
            payload: id
        })
    };

    return (
        <FirebaseContext.Provider value={{
            showLoader, addNote, removeNote, fetchNotes,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
};