import { Container } from "./styles";

export const Button = ({ title, loading=false, ...rest }) => {
    console.log(loading, "**")
    return (
      <Container  
        type="button"
        disabled={loading}
        {...rest}
        >
            { loading ? "Carregando..." : title }
        </Container>
    );
};
