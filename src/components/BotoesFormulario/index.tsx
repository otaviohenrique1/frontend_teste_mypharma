import { Grid, ButtonGroup, Button } from "@mui/material";
import { Link, To } from "react-router-dom";
import styled from "styled-components";
interface BotoesFormularioProps {
  botao_cadastrar_label: string;
  botao_limpar_label: string;
  botao_link_label: string;
  to: To;
}

export function BotoesFormulario(props: BotoesFormularioProps) {
  return (
    <Grid md={12} xs={12} item display="flex" justifyContent="end">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button color="primary" type="submit">{props.botao_cadastrar_label}</Button>
        <BotaoLimpar color="error" type="reset">{props.botao_limpar_label}</BotaoLimpar>
        <LinkEstilizado to={props.to}>
          <BotaoLinkEstilizado {...props} type="button" color="success">
            {props.botao_link_label}
          </BotaoLinkEstilizado>
        </LinkEstilizado>
      </ButtonGroup>
    </Grid>
  );
}

const BotaoLinkEstilizado = styled(Button)`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`;

const LinkEstilizado = styled(Link)`
  text-decoration: none;
  color: white;
`;

const BotaoLimpar = styled(Button)`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;
