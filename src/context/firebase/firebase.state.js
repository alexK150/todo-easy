import React, {useReducer} from 'react';
import axios from 'axios';

import {FirebaseContext} from './firebase-context';
import {firebaseReducer} from './firebase.reducer';
import ActionType from '../alert.types';

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({children}) => {

    const initialState = {
        notes: [],
        isLoading: false
    };
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => dispatch({type: ActionType.SHOW_LOADER});

    const fetchNotes = async () => {
        showLoader();
        const res = await axios.get(`${url}/notes.json`);

        const payload = Object.keys(res.data || []).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        });
        dispatch({type: ActionType.FETCH_NOTES, payload})
    };

    const addNote = async title => {
        const note = {
            title, date: new Date().toJSON()
        };

        try {
            const res = await axios.post(`${url}/notes.json`, note);
            const payload = {
                ...note,
                id: res.data.name
            };
            dispatch({type: ActionType.ADD_NOTE, payload})

        } catch (e) {
            throw new Error(e.message)
        }
    };

    const removeNote = async id => {

        await axios.delete(`${url}/notes/${id}.json`);

        dispatch({
            type: ActionType.REMOVE_NOTE,
            payload: id
        });
    };

    return (
        <FirebaseContext.Provider value={{
            showLoader, addNote, removeNote, fetchNotes,
            isLoading: state.isLoading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
};