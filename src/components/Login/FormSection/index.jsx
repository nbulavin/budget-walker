import React from 'react';
import { observer } from 'mobx-react';
import { FormDiv } from './styles';
import FormInput from '../../common/Form/Input';

const FormSection = (observer(class FormSection extends React.Component {
  constructor(props) {
    super(props);

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(text) {
    const { store } = this.props;

    store.bindCredentialsEmail(text);
  }

  handlePassword(text) {
    const { store } = this.props;

    store.bindCredentialsPassword(text);
  }

  render() {
    const { errors } = this.props.store;

    return (
      <FormDiv>
        <FormInput
          name="Email"
          errors={errors.email}
          predefinedType="email"
          onInputChange={this.handleEmail}
        />
        <FormInput
          name="Пароль"
          errors={errors.password}
          predefinedType="password"
          onInputChange={this.handlePassword}
        />
      </FormDiv>
    );
  }
}));

export default FormSection;
