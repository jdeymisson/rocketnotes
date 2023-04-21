import { useState } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [ data, setData ] = useState({});

    const signIn = async ({ email, password }) => {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            api.defaults.headers.authorization = `Bearer ${ token }`;

            setData({ user, token })
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível fazer login.");
            };
        };
    };

    return(
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };