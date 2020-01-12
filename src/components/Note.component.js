import React from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";

export const Note = ({notes, onRemove}) => {
    return (
        <TransitionGroup component='ul' className="list-group">
            {notes.map(note => (
                <CSSTransition
                    key={note.id}
                    classNames='note'
                    timeout={800}
                >
                    <li className="list-group-item note">
                        <div>
                            <strong>{note.title}</strong>
                            <small>{note.date}</small>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => onRemove(note.id)}
                        >Delete
                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
};