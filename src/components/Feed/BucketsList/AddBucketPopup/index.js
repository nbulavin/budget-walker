import React from 'react';
import FormInput from '../../../common/Form/Input';
import FormSelect from '../../../common/Form/Select';
import { PopupBody, PopupDiv, PopupHeader } from './styles';
import FormTextArea from "../../../common/Form/TextArea";
import FormCurrencyInput from "../../../common/Form/CurrencyInput";

class AddBucketPopup extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      provider: '',
      description: '',
      bucketType: null,
      expectedEnrollment: null
    }
  }

  handleBucketType = (text) => {
    this.setState({ bucketType: text })
  }

  handleName = (text) => {
    this.setState({ name: text })
  }

  handleProvider = (text) => {
    this.setState({ provider: text })
  }

  handleDescription = (text) => {
    this.setState({ description: text })
  }

  handleExpectedEnrollment = (value) => {
    this.setState({ expectedEnrollment: value })
  }

  render() {
    return (
      <PopupDiv>
        <PopupHeader>
          Добавить счет
        </PopupHeader>
        <PopupBody>
          <FormSelect
            name={"Тип"}
            errors={[]}
            onInputChange={this.handleBucketType}
          />
          <FormInput
            name={"Название"}
            errors={[]}
            onInputChange={this.handleName}
          />
          <FormInput
            name={"Провайдер"}
            errors={[]}
            onInputChange={this.handleProvider}
          />
          <FormTextArea
            name={"Описание"}
            errors={[]}
            onInputChange={this.handleDescription}
          />
          <FormCurrencyInput
            name={"Ожидаемые поступления"}
            errors={[]}
            onInputChange={this.handleExpectedEnrollment}
          />

          <div>
            Цвет
            <input placeholder="Опционально"/>
          </div>

        </PopupBody>
      </PopupDiv>
    )
  }
}

export default AddBucketPopup;