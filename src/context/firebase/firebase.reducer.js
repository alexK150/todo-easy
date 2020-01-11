import ActionType from '../alert.types'

const handlers = {
    [ActionType.SHOW_LOADER]: state => ({...state, loading: true}),
    [ActionType.ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload]
    }),
    [ActionType.FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload}),
    [ActionType.REMOVE_NOTE]: (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== payload)
    }),
    DEFAULT: state => state
};

export const firebaseReducer = (state, action) =>{
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
};