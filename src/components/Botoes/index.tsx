import { Button } from "@mui/material";
import { ReactNode } from "react";
import { Link, To } from "react-router-dom";
import styled from "styled-components";

interface BotaoLinkProps {
  to: To;
  children: ReactNode;
}

export function BotaoLink(props: BotaoLinkProps) {
  return (
    <LinkEstilizado to={props.to}>
      <Button variant="contained" color="primary" type="button">{props.children}</Button>
    </LinkEstilizado>
  );
}

const LinkEstilizado = styled(Link)`
  text-decoration: none;
`;
