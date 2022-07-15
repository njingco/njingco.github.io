let initial_state = {
    isNavActive:false,
};

export default function navReducer(state = initial_state, action:any){
    switch (action.type){
        case action.TOGGLE_NAV_STATUS:
            return {
                ...state,
                isNavActive:!state.isNavActive
            };
        case action.SET_NAV_STATUS:
            return {
                ...state,
                isNavActive:!action.status
            };
        default:
            return state;
    }
}