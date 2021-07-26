import React from "react";
import { observer, inject } from 'mobx-react';
import { BackgroundDiv, NarrowDiv } from "./styles";
import SendButton from "../../components/common/SendButton";
import FormSection from "../../components/Login/FormSection";

@inject('LoginStore')
@observer
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest() {
    console.log(this.props.LoginStore);
    const store = this.props.LoginStore;
    const hash = {
      email: store.params.email,
      password: store.params.password
    };
    console.log(hash);
  }


  render() {
    return (
      <BackgroundDiv>
        <NarrowDiv>
          <FormSection />
          <SendButton sendRequest={this.sendRequest} buttonName={"Sign in"}/>
        </NarrowDiv>
      </BackgroundDiv>
    );
  }

}

export default Login;
