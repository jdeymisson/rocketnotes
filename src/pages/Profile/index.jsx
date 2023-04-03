import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera  } from "react-icons/fi"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Profile = () => {
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
                        src ="https://github.com/jdeymisson.png" 
                        alt="Foto do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        
                        <input 
                            id="avatar"
                            type="file"    
                        />
                    </label>
                </Avatar>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={ FiUser } 
                />

                <Input 
                    placeholder="E-mail"
                    icon={ FiMail } 
                    type="password" 
                />

                <Input 
                    placeholder="Senha atual"
                    icon={ FiLock } 
                    type="text" 
                />

                <Input 
                    placeholder="Nova senha"
                    icon={ FiLock } 
                    type="text" 
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    );
};