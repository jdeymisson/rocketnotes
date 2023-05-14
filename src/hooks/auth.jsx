import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [ data, setData ] = useState({});

    const signIn = async ({ email, password }) => {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", JSON.stringify(token));

            api.defaults.headers.common['Authorization'] = `Bearer ${ token }`;

            setData({ user, token })
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível fazer login.");
            };
        };
    };

    const signOut = () => {
        localStorage.removeItem("@rocketnotes:user");
        localStorage.removeItem("@rocketnotes:token");
        setData({});
    };

    const updateProfile = async ({ user, avatarFile }) => {
        try {
            if(avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);

                user.avatar = response.data.avatar;
            };

            await api.put("/users", user);
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            
            setData({ user, token: data.token });
            alert("Perfil atualizado!")
        }catch(error) {
            if(error.response) {
                console.log("entrou")
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o perfil do usuário.")
            };
        };
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("@rocketnotes:user"));
        const token = localStorage.getItem("@rocketnotes:token");

        if(user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${ token }`;

            setData({
                user, 
                token
            });
        };
    }, []);

    return(
        <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };