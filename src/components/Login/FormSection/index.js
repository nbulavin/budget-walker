import React from 'react';
import { observer, inject } from 'mobx-react';
import { FormInput } from './styles'

@inject('LoginStore')
@observer
class FormSection extends React.Component {
  constructor(props) {
    super(props);

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(text) {
    this.props.LoginStore.bindCredentialsEmail(text.target.value);
  }

  handlePassword(text) {
    this.props.LoginStore.bindCredentialsPassword(text.target.value);
  }

  render() {
    return (
      <div>
        <div>
          <FormInput type="email" placeholder={"Email"} onChange={this.handleEmail}/>
        </div>
        <div>
          <FormInput type="password" placeholder={"Пароль"} onChange={this.handlePassword}/>
        </div>
      </div>
    );
  }
}

export default FormSection;
