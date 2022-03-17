import { Button, ButtonProps } from "@mui/material";
import { Link, To } from "react-router-dom";
import styled from "styled-components";

interface BotaoLinkProps extends ButtonProps {
  to: To;
  label: string;
}

export function BotaoLink(props: BotaoLinkProps) {
  return (
    <LinkEstilizado to={props.to}>
      <Button {...props} variant="contained" color="primary" type="button">
        {props.label}
      </Button>
    </LinkEstilizado>
  );
}

const LinkEstilizado = styled(Link)`
  text-decoration: none;
  color: white;
`;
