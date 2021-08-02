import React from "react";
import { observer, inject } from 'mobx-react';
import { gql } from 'graphql-request';
import { BackgroundDiv, NarrowDiv } from "./styles";
import SendButton from "../../components/common/SendButton";
import FormSection from "../../components/Login/FormSection";
// import apiClient from "../../utils/apiClient";
import { GraphQLClient } from 'graphql-request';

const SIGN_IN_MUTATION = gql`
  mutation SignNeIn($email: String!, $password: String!) {
    signIn(
      email: $email
      password: $password
    ) {
      errors
      token
      me {
        firstName
        lastName
        email
      }
    }
  }
`

@inject('LoginStore', 'UserStore')
@observer
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.sendRequest = this.sendRequest.bind(this);
    this.state = {
      buttonIdle: true,
      loginErrors: [],
      buttonEnabled: false
    }
  }

  sendRequest() {
    this.setState({ buttonIdle: false, loginErrors: [] });
    console.log(this.props.LoginStore);
    const store = this.props.LoginStore;
    const userStore = this.props.UserStore;
    const hash = {
      email: store.params.email,
      password: store.params.password
    };
    console.log(hash);
    const rootObject = this;
    const client = new GraphQLClient('http://localhost:3001/graphql')
    client.request(SIGN_IN_MUTATION, hash)
      .then((data) => {
        console.log("we are in then");
        if (data.signIn.errors.length < 1) {
          console.log("we are in if");
          console.log(data.signIn);
          userStore.bindOption(data.signIn.me);
        } else {
          console.log("we are in else");
          rootObject.setState({ loginErrors: data.signIn.errors });
        }
      });
    this.setState({buttonIdle: true});
  }

  render() {
    const { buttonIdle, loginErrors } = this.state;
    // const buttonEnabled = this.props.LoginStore.email && this.props.LoginStore.password;
    return (
      <BackgroundDiv>
        <NarrowDiv>
          <FormSection />
          <p>
            {loginErrors}
          </p>
          <SendButton
            sendRequest={this.sendRequest}
            buttonIdle={buttonIdle}
            buttonName={"Войти"}
            buttonEnabled={true}
          />
        </NarrowDiv>
      </BackgroundDiv>
    );
  }

}

export default Login;
