import { useState } from "react";
import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera  } from "react-icons/fi"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export const Profile = () => {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarURL);
    const [avatarFile, setAvatarFile] = useState(null);

    const handleUpdate = async () => {
        const user = { 
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        };

        await updateProfile({ user, avatarFile })
    };

    const handleChangeAvatar = (event) => {
        const file = event.target.files[0];
        setAvatarFile(file);

        const avatarPreview = URL.createObjectURL(file);
        setAvatar(avatarPreview);
    };

    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img  
                        src ={avatar} 
                        alt="Foto do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        
                        <input 
                            id="avatar"
                            type="file"
                            onChange={ handleChangeAvatar }
                        />
                    </label>
                </Avatar>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={ FiUser } 
                    value={ name }
                    onChange={(event) => setName(event.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    icon={ FiMail } 
                    type="email" 
                    value={ email }
                    onChange={(event) => setEmail(event.target.value)}
                />

                <Input 
                    placeholder="Senha atual"
                    icon={ FiLock } 
                    type="password" 
                    onChange={(event) => setOldPassword(event.target.value)}
                />

                <Input 
                    placeholder="Nova senha"
                    icon={ FiLock } 
                    type="password" 
                    onChange={(event) => setNewPassword(event.target.value)}
                />

                <Button title="Salvar" onClick={ handleUpdate }/>
            </Form>
        </Container>
    );
};