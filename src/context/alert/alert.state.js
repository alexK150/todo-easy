import React, {useReducer} from 'react';
import {AlertContext} from "./alert.context";
import {alertReducer} from "./alert.reducer";
import AlertActionTypes from "../alert.types";

export const AlertState = ({children}) =>{
    const [state, dispatch] = useReducer(alertReducer, {visible: false});

    const show = (text, type = 'warning') => {
        dispatch({
            type: AlertActionTypes.SHOW_ALERT,
            payload: {text, type}
        })
    };

    const hide = () => dispatch({type: AlertActionTypes.HIDE_ALERT});

    return (
        <AlertContext.Provider value={{
            show, hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
};