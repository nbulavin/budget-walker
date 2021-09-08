import React from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { CentralizedDiv, NarrowDiv } from './styles';
import PrimaryBlockButton from '../../components/common/buttons/PrimaryBlockButton';
import FormSection from '../../components/Login/FormSection';
import BackgroundTitle from '../../components/common/BackgroundTitle';
import Errors from '../../components/Login/Errors';
import { apiClient } from '../../helpers/graphQlClient';
import SIGN_IN_MUTATION from '../../graphql/LoginGql';
import { addAuthToken } from '../../helpers/authorization';
import ROUTE_URLS from '../../const/routeUrls';

const Login = inject('LoginStore', 'UserStore')(observer(class Login extends React.Component {
  constructor(props) {
    super(props);

    this.sendRequest = this.sendRequest.bind(this);
    this.state = {
      loginErrors: [],
      redirect: false,
    };
  }

  componentWillUnmount() {
    const { LoginStore } = this.props;

    this.setState({ loginErrors: [], redirect: false });
    LoginStore.cleanStore();
  }

  sendRequest() {
    this.setState({ loginErrors: [] });
    const { LoginStore, UserStore } = this.props;
    LoginStore.startProgress();
    const hash = {
      email: LoginStore.params.email,
      password: LoginStore.params.password,
    };
    const rootObject = this;
    apiClient.request(SIGN_IN_MUTATION, hash)
      .then((data) => {
        if (data.signIn.errors.length < 1) {
          UserStore.bindOption(data.signIn.me);
          addAuthToken(data.signIn.token);
          rootObject.setState({ redirect: true });
        } else {
          rootObject.setState({ loginErrors: data.signIn.errors });
        }
      }).catch(() => {
        rootObject.setState({ loginErrors: ['Неизвестная ошибка. Попробуйте позже'] });
      }).finally(() => {
        LoginStore.finishProgress();
      });
  }

  render() {
    const { loginErrors, redirect } = this.state;
    const { email, password, inProgress } = this.props.LoginStore.params;
    const buttonEnabled = (email !== '' && password !== '' && !inProgress);
    if (redirect === true) {
      return (<Redirect to={ROUTE_URLS.feed} />);
    }
    return (
      <CentralizedDiv>
        <BackgroundTitle text="Войти" />
        <NarrowDiv>
          <FormSection />
          <Errors errorsArray={loginErrors} />
          <PrimaryBlockButton
            sendRequest={this.sendRequest}
            loading={inProgress}
            buttonName="Войти"
            buttonEnabled={buttonEnabled}
          />
        </NarrowDiv>
      </CentralizedDiv>
    );
  }
}));

export default Login;
