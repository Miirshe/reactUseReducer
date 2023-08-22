import { createContext, useContext, useReducer } from "react";
import { UserReducer, initialState } from "./UserReducer";

const MainContextUsers = createContext(initialState);

export const UserCreateContext = ({ children }) => {

    const [state, dispatch ] = useReducer(UserReducer, initialState);

    const addUser = (user_info) => {
        const user = state.users.concat(user_info);
        
        dispatch({
            type: "add_user",
            payload: {
                users: user
            }
        })
        alert('successfully added');
        console.log("users",user);
    };

    const values = {
        addUser
    }

    return <MainContextUsers.Provider value={values} >
        {
            children
        } 
        </MainContextUsers.Provider>

}

export const useADDUSER = () => {
    const user_context = useContext(MainContextUsers);

    if (user_context === undefined) {
        console.log("user_context is undefined");
    }
    return user_context;
}