import React from 'react';
import { observer, inject } from 'mobx-react';
import { BackgroundDiv, NarrowDiv } from './styles';
import SendButton from '../../components/common/SendButton';
import FormSection from '../../components/Login/FormSection';
import BackgroundTitle from '../../components/common/BackgroundTitle';
import Errors from '../../components/Login/Errors';
import apiClient from '../../helpers/graphQlClient';
import SIGN_IN_MUTATION from './graphql/mutations';
import { addAuthToken } from '../../helpers/authorization';

@inject('LoginStore', 'UserStore')
@observer
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.sendRequest = this.sendRequest.bind(this);
    this.state = {
      loginErrors: [],
    };
  }

  sendRequest() {
    this.setState({ loginErrors: [] });
    const store = this.props.LoginStore;
    store.startProgress();
    const userStore = this.props.UserStore;
    const hash = {
      email: store.params.email,
      password: store.params.password,
    };
    const rootObject = this;
    apiClient.request(SIGN_IN_MUTATION, hash)
      .then((data) => {
        if (data.signIn.errors.length < 1) {
          userStore.bindOption(data.signIn.me);
          addAuthToken(data.signIn.token);
        } else {
          rootObject.setState({ loginErrors: data.signIn.errors });
        }
      }).catch(() => {
        rootObject.setState({ loginErrors: ['Неизвестная ошибка. Попробуйте позже'] });
      }).finally(() => {
        store.finishProgress();
      });
  }

  render() {
    const { loginErrors } = this.state;
    const { email, password, inProgress } = this.props.LoginStore.params;
    const buttonEnabled = (email !== '' && password !== '' && !inProgress);
    return (
      <BackgroundDiv>
        <BackgroundTitle text="Войти" />
        <NarrowDiv>
          <FormSection />
          <Errors errorsArray={loginErrors} />
          <SendButton
            sendRequest={this.sendRequest}
            loading={inProgress}
            buttonName="Войти"
            buttonEnabled={buttonEnabled}
          />
        </NarrowDiv>
      </BackgroundDiv>
    );
  }
}

export default Login;
