import { useState } from "react";
import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const SingUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async(event) => {
        event.preventDefault();

        if(!name || !email || !password) {
            return alert("Verifique os campos, todos os dados precisam ser preenchidos.");
        };

        api.post("/users", { name, email, password })
            .then(() => alert("Usuário cadastrado com sucesso!"))
            .catch(error => {
                if(error.response) {
                    alert(error.response.data.error);
                } else {
                    alert("Não foi possível cadastrar o usuário.");
                };
        });
    };

    return(
        <Container>
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    icon={ FiUser } 
                    type="text" 
                    placeholder="Nome" 
                    onChange={({ target }) => setName(target.value)}    
                />

                <Input 
                    icon={ FiMail } 
                    type="text" 
                    placeholder="E-mail" 
                    onChange={({ target }) => setEmail(target.value)} 
                />

                <Input 
                    icon={ FiLock } 
                    type="password" 
                    placeholder="Senha" 
                    onChange={({ target }) => setPassword(target.value)} 
                />

                <Button  onClick={handleSignUp} title="Cadastrar" />

                <Link to="/">Voltar para login</Link>
            </Form>
        </Container>
    );
};