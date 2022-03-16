import { Grid } from "@mui/material";
import { Field } from "formik";
import { TextField } from "formik-mui";
import styled from "styled-components";


interface CampoFormularioProps {
  values: any;
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type: "text" | "number" | "password";
}

export function CampoFormulario(props: CampoFormularioProps) {
  return (
    <Grid md={12} xs={12} item>
      <FieldEstilizado
        id={props.id}
        label={props.label}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.values}
        component={TextField}
      />
    </Grid>
  );
}

const FieldEstilizado = styled(Field)`
  width: 100%;
`;
