import React from 'react';
import { observer, inject } from 'mobx-react';
import { StyledInput } from './styles';

const FormSection = inject('LoginStore')(observer(class FormSection extends React.Component {
  constructor(props) {
    super(props);

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(text) {
    const { LoginStore } = this.props;

    LoginStore.bindCredentialsEmail(text.target.value);
  }

  handlePassword(text) {
    const { LoginStore } = this.props;

    LoginStore.bindCredentialsPassword(text.target.value);
  }

  render() {
    return (
      <div>
        <div>
          <StyledInput type="email" placeholder="Email" onChange={this.handleEmail} />
        </div>
        <div>
          <StyledInput type="password" placeholder="Пароль" onChange={this.handlePassword} />
        </div>
      </div>
    );
  }
}));

export default FormSection;
