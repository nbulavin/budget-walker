import React from 'react';
import FormInput from '../../../common/Form/Input';
import FormSelect from '../../../common/Form/Select';
import FormTextArea from "../../../common/Form/TextArea";
import FormCurrencyInput from "../../../common/Form/CurrencyInput";
import FormColorPicker from "../../../common/Form/ColorPicker";
import PrimaryBlockButton from "../../../common/buttons/PrimaryBlockButton";
import BucketItem from "../BucketItem";
import { ExampleBody, PopupBody, PopupColumn, PopupDiv, PopupHeader } from './styles';

class AddBucketPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      provider: '',
      description: '',
      bucketType: null,
      expectedEnrollment: null,
      color: '',
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

  handleColor = (text) => {
    this.setState({ color: text })
  }

  render() {
    const { name, provider, bucketType, color } = this.state;

    return (
      <PopupDiv>
        <PopupHeader>
          Создать счет
        </PopupHeader>
        <PopupBody>
          <PopupColumn>
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
            <PrimaryBlockButton
              sendRequest={this.sendRequest}
              loading={false}
              buttonName="Создать"
              buttonEnabled={true}
            />
          </PopupColumn>

          <PopupColumn>
            <ExampleBody>
              <BucketItem
                itemProvider={provider}
                itemTitle={name}
                itemType={bucketType}
                itemActualBalance={145.23}
                backgroundColor={color}
              />
            </ExampleBody>

            <FormColorPicker
              name={"Цвет"}
              errors={[]}
              onInputChange={this.handleColor}
            />
          </PopupColumn>
        </PopupBody>
      </PopupDiv>
    )
  }
}

export default AddBucketPopup;