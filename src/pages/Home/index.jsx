import { FiPlus, FiSearch } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNotes } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Link } from "react-router-dom";

export const Home = () => {
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />
            
            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="Frontend" /></li>
                <li><ButtonText title="Node" /></li>
                <li><ButtonText title="React" /></li>
            </Menu>

            <Search>
                <Input icon={FiSearch} type="text" placeholder="Pesquise..." />
            </Search>
            
            <Content>
              <Section title="Minhas Notas">
                <Note data={{
                    title: "Introdução ao React", 
                    tags: [{ id: 1, name: "React" }, { id: 2, name: "Axíos" }]}}
                />
                <Note data={{
                    title: "Introdução ao React", 
                    tags: [{ id: 1, name: "React" }, { id: 2, name: "Axíos" }]}}
                />
              </Section>
            </Content>
            <NewNotes  to="/new">
                <FiPlus />
                Criar nota
            </NewNotes>
        </Container>
    )
};