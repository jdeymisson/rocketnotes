import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/Textarea";
import { NotItem } from "../../components/NotIntem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
export const New = () => {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input  placeholder="Titulo" type="text" />
                    <TextArea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NotItem value="https://gooogle.com" />
                        <NotItem isNew  placeholder="Novo link" />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NotItem value="React" />
                            <NotItem value="React" />
                            <NotItem value="React" />
                            <NotItem value="React" />
                            <NotItem value="React" />
                            <NotItem isNew  placeholder="Novo tag" />
                        </div>
                    </Section>
                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    );
};