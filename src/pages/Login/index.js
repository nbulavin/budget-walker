import React from "react";
import { BackgroundDiv, NarrowDiv } from "./styles";
import SendButton from "../../components/common/SendButton";
import FormSection from "../../components/Login/FormSection";


function Login() {
  return (
    <BackgroundDiv>
      <NarrowDiv>
        <FormSection />
        <SendButton sendRequest={console.log("test")} buttonName={"Sign in"}/>
      </NarrowDiv>
    </BackgroundDiv>
  );
}

export default Login;
