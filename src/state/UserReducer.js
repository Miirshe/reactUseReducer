export const initialState = {
    users: [],
    authentication: false,
}

export const UserReducer = (state, action) => {

    const { type, payload } = action;

    if (type === 'add_user') {
        return {
            ...state,
            users: payload.user,
        }
    } else {
        console.log("User Not payload");
    }

}