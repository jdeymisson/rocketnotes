import { createContext, useContext } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    return(
        <AuthContext.Provider value={{ name: "Johnny", email: "johnny@email.com" }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };