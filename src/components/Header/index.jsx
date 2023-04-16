import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri"

export const Header = ({ title, loading=false, ...rest }) => {
    return (
      <Container>
        <Profile to="/profile">
          <img 
            src="https://github.com/jdeymisson.png"
            alt="Foto do usuário"  
          />
          <div>
            <span>Bem-vindo</span>
            <strong>Johnny Deymisson</strong>
          </div>
        </Profile>
        <Logout  to="/signin">
          <RiShutDownLine />
        </Logout>
      </Container>
    );
};
