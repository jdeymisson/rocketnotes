import { Container, Links } from "./styles.js";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export const Details = () => {
  
  return (
    <Container>
      <Header />
      <Section title="Links úteis">
        <Links>
          <li><a href="#" target="_blank">Link 01</a></li>
        </Links>
      </Section>
      <Button title="Voltar" />
    </Container>
  );
};