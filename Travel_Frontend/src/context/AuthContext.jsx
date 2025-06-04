import { createContext, useEffect, useReducer } from "react";

// ✅ Utility function to safely parse user from localStorage
const getUserFromLocalStorage = () => {
    try {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        return null;
    }
};

// ✅ Initial state
const initial_state = {
    user: getUserFromLocalStorage(),
    loading: false,
    error: null,
};

// ✅ Create context
export const AuthContext = createContext(initial_state);

// ✅ Reducer
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                user: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                user: null,
                loading: false,
                error: action.payload,
            };
        case "REGISTER_SUCCESS":
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

// ✅ Context Provider
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initial_state);

    useEffect(() => {
        // Save user to localStorage when it changes
        if (state.user) {
            localStorage.setItem("user", JSON.stringify(state.user));
        } else {
            localStorage.removeItem("user");
        }
    }, [state.user]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
