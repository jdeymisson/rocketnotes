import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

export const Header = ({ title, loading=false, ...rest }) => {
  const { signOut } = useAuth();

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
        <Logout onClick={ signOut }>
          <RiShutDownLine />
        </Logout>
      </Container>
    );
};
