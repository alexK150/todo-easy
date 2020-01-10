import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alert.context";

export const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);

    const submitHandler = e => {
        e.preventDefault();

        alert.show(value, 'success')
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Type next task...'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
};