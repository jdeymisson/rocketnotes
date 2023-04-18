import { Background, Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";

export const SingIn = () => {
    const userDados = useAuth();

    console.log(userDados, "XX")
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input 
                    icon={ FiMail } 
                    type="text" 
                    placeholder="E-mail" />
                <Input 
                    icon={ FiLock } 
                    type="password" 
                    placeholder="Senha" />

                <Button title="Entrar" />

                <Link to="/register">Criar conta</Link>
            </Form>

            <Background />
        </Container>
    );
};