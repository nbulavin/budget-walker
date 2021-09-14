import React from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { CentralizedDiv, NarrowDiv } from './styles';
import PrimaryBlockButton from '../../components/common/buttons/PrimaryBlockButton';
import FormSection from '../../components/Login/FormSection';
import BackgroundTitle from '../../components/common/BackgroundTitle';
import Errors from '../../components/Login/Errors';
import SIGN_IN_MUTATION from '../../graphql/LoginGql';
import { addAuthToken } from '../../helpers/authorization';
import { anonRequestSender } from '../../helpers/requestSender';
import ROUTE_URLS from '../../const/routeUrls';
import ObjectHelper from '../../helpers/ObjectHelper';
import LoginStore from '../../stores/LoginStore';

const Login = inject('UserStore')(observer(class Login extends React.Component {
  constructor(props) {
    super(props);

    this.store = new LoginStore();
    this.state = {
      redirect: false,
    };
  }

  componentWillUnmount() {
    this.store.cleanStore();
  }

  handleRequestSuccess = (data) => {
    const { UserStore } = this.props;
    const { signIn: { me, token, errors } } = data;

    if (ObjectHelper.isEmpty(errors)) {
      UserStore.bindUserInfo(me);
      UserStore.bindAuthToken(token);
      addAuthToken(token);
      this.setState({ redirect: true });
    } else {
      this.store.collectRequestErrors(errors);
    }
  }

  handleRequestFailure = (message) => {
    this.store.collectCommonErrors([message]);
  }

  applyRequestFinalAction = () => {
    const { redirect } = this.state;
    const { history } = this.props;

    this.store.finishProgress();
    if (redirect === true) {
      history.push(ROUTE_URLS.feed);
    }
  }

  sendRequest = () => {
    const { startProgress, params: { email, password } } = this.store;

    startProgress();
    const hash = { email, password };
    anonRequestSender(SIGN_IN_MUTATION,
      hash,
      this.handleRequestSuccess,
      this.handleRequestFailure,
      this.applyRequestFinalAction);
  }

  render() {
    const { errors, params: { email, password, inProgress } } = this.store;
    const buttonEnabled = (email !== '' && password !== '' && !inProgress);

    return (
      <CentralizedDiv>
        <BackgroundTitle text="Войти" />
        <NarrowDiv>
          <FormSection store={this.store} />
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
