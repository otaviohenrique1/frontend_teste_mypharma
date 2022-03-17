import { Grid, MenuItem } from "@mui/material";
import { Field } from "formik";
import { Select, TextField } from "formik-mui";
import { ReactNode } from "react";
import styled from "styled-components";


interface CampoFormularioProps {
  values: any;
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type: "text" | "number" | "password" | "email";
}

export function CampoFormulario(props: CampoFormularioProps) {
  return (
    <Grid md={12} xs={12} item>
      <CampoFormularioEstilizado
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

const CampoFormularioEstilizado = styled(Field)`
  width: 100%;
`;

interface CampoSelcectFormularioProps {
  data: {
    valueMenuItem: string | number | readonly string[];
    chidrenMenuItem: ReactNode;
  }[];
  id: string;
  label: string;
  labelId: string;
  name: string;
}

export function CampoSelcectFormulario(props: CampoSelcectFormularioProps) {
  return (
    <Field
      component={Select}
      id={props.id}
      name={props.name}
      labelId={props.labelId}
      label={props.label}
    >
      {props.data.map((item, index) => {
        return (
          <MenuItem key={index} value={item.valueMenuItem}>
            {item.chidrenMenuItem}
          </MenuItem>
        );
      })}
    </Field>
  );
}
