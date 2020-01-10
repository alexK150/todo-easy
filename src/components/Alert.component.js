import React, {useContext} from 'react';
import {AlertContext} from "../context/alert/alert.context";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext);

    if (!alert.visible) {
        return null
    }

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <strong>Attention!</strong>
            {alert.text}
            <button type="button"
                    onClick={hide}
                    className="close"
                    aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
};