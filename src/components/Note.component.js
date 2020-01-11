import React from 'react';

export const Note = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map(note => (
                <li
                    className="list-group-item note"
                    key={note.id}
                >
                    <div>
                        <strong>{note.title}</strong>
                        <small>{note.date}</small>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                    >Delete
                    </button>
                </li>
            ))}
        </ul>
    )
};