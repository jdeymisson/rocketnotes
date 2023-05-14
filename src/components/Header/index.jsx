import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
  
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
export const Header = ({ title, loading=false, ...rest }) => {
  const { signOut, user } = useAuth();

  const teste = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return (
      <Container>
        <Profile to="/profile">
          <img 
            src={teste}
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
