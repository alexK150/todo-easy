import AlertActionTypes from "../alert.types";

export const alertReducer = (state, action) => {
    switch (action.type) {
        case AlertActionTypes.SHOW_ALERT:
            return {
                ...state,
                visible: true
            };
        case AlertActionTypes.HIDE_ALERT:
            return {
                ...state,
                visible: false
            };
        default:
            return state
    }
};