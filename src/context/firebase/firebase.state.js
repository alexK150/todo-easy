import React from 'react';
import {FirebaseContext} from "./firebase-context";

export const FirebaseState = ({children}) => {
    return (
        <FirebaseContext.Provider>
            {children}
        </FirebaseContext.Provider>
    )
};