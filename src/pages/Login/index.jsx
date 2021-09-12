import React from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect, withRouter } from 'react-router-dom';
import { CentralizedDiv, NarrowDiv } from './styles';
import PrimaryBlockButton from '../../components/common/buttons/PrimaryBlockButton';
import FormSection from '../../components/Login/FormSection';
import BackgroundTitle from '../../components/common/BackgroundTitle';
import Errors from '../../components/Login/Errors';
import SIGN_IN_MUTATION from '../../graphql/LoginGql';
import { addAuthToken } from '../../helpers/authorization';
import { anonRequestSender } from '../../helpers/requestSender';
import ROUTE_URLS from '../../const/routeUrls';
import objectHelper from '../../helpers/objectHelper';

const Login = inject('LoginStore', 'UserStore')(observer(class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  componentWillUnmount() {
    const { LoginStore } = this.props;

    this.setState({ loginErrors: [], redirect: false });
    LoginStore.cleanStore();
  }

  handleRequestSuccess = (data) => {
    const { LoginStore, UserStore } = this.props;
    const { signIn: { me, token, errors } } = data;

    if (objectHelper.isEmpty(errors)) {
      UserStore.bindOption(me);
      addAuthToken(token);
      this.setState({ redirect: true });
    } else {
      LoginStore.collectRequestErrors(errors)
      this.setState({ loginErrors: errors });
    }
  }

  handleRequestFailure = (message) => {
    const { LoginStore } = this.props;

    LoginStore.collectCommonErrors([message])
  }

  applyRequestFinalAction = () => {
    const { redirect } = this.state;
    const { LoginStore, history } = this.props;

    LoginStore.finishProgress();
    if (redirect === true) {
      history.push(ROUTE_URLS.feed);
    }
  }

  sendRequest = () => {
    const { startProgress, params: { email, password } } = this.props.LoginStore;

    startProgress();
    const hash = { email, password };
    anonRequestSender(SIGN_IN_MUTATION,
      hash,
      this.handleRequestSuccess,
      this.handleRequestFailure,
      this.applyRequestFinalAction);
  }

  render() {
    const { errors, params: { email, password, inProgress } } = this.props.LoginStore;
    const buttonEnabled = (email !== '' && password !== '' && !inProgress);

    return (
      <CentralizedDiv>
        <BackgroundTitle text="Войти" />
        <NarrowDiv>
          <FormSection />
          <Errors errorsArray={errors.common} />
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

export default withRouter(Login);
