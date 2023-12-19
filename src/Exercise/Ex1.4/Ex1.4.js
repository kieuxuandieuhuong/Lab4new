import "typeface-roboto";
import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import MyTextInput from "./MyTextInput";
import MySelect from "./MySelect";

export default function     Ex14() {
  return (
    <>
      <FormGroup style={{ width: 200, margin: 10 }}>
        <MyTextInput />
        <MySelect />
      </FormGroup>
    </>
  )
}