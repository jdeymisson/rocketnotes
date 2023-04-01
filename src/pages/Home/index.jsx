import { FiPlus } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNotes } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText"

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

            </Search>

            <Content>

            </Content>

            <NewNotes>
                <FiPlus />
                <span>Criar nota</span>
            </NewNotes>
        </Container>
    )
};