import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
  
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
export const Header = ({ title, loading=false, ...rest }) => {
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
      <Container>
        <Profile to="/profile">
          <img 
            src={avatarURL}
            alt="Foto do usuário"  
          />
          <div>
            <span>Bem-vindo</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>
        <Logout onClick={ signOut }>
          <RiShutDownLine />
        </Logout>
      </Container>
    );
};
