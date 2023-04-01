import { Container, Links } from "./styles.js";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag/index.jsx";

export const Details = () => {
  
  return (
    <Container>
      <Header />
      <Section title="Links úteis">
        <Links>
          <li><a href="#" target="_blank">https://google.com</a></li>
          <li><a href="#" target="_blank">https://google.com</a></li>
        </Links>
      </Section>
      <Section title="Marcadores">
        <Tag title="Nodejs" />
        <Tag title="React" />
        <Tag title="JavaScript" />
      </Section>
      <Button title="Voltar" />
    </Container>
  );
};