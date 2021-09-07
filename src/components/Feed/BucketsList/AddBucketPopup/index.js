import React from 'react';
import { observer, inject } from 'mobx-react';
import { authApiClient } from '../../../../helpers/graphQlClient';
import { ADD_BUCKET_ITEM } from '../../../../graphql/Feed/BucketListGql';
import FormInput from '../../../common/Form/Input';
import FormSelect from '../../../common/Form/Select';
import FormTextArea from '../../../common/Form/TextArea';
import FormCurrencyInput from '../../../common/Form/CurrencyInput';
import FormColorPicker from '../../../common/Form/ColorPicker';
import PrimaryBlockButton from '../../../common/buttons/PrimaryBlockButton';
import BucketItem from '../BucketItem';
import {
  ButtonBlock,
  ExampleBody,
  PopupBody,
  PopupColumn,
  PopupDiv,
  PopupHeader,
} from './styles';

const AddBucketPopup = inject('BucketListStore')(observer(class AddBucketPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      provider: '',
      description: '',
      bucketType: null,
      expectedEnrollment: null,
      color: '',
      inProgress: false,
    };
  }

  handleBucketType = (text) => {
    this.setState({ bucketType: text });
  }

  handleName = (text) => {
    this.setState({ name: text });
  }

  handleProvider = (text) => {
    this.setState({ provider: text });
  }

  handleDescription = (text) => {
    this.setState({ description: text });
  }

  handleExpectedEnrollment = (value) => {
    this.setState({ expectedEnrollment: value });
  }

  handleColor = (text) => {
    this.setState({ color: text });
  }

  sendBucketCreateRequest = () => {
    console.log('Clicked');
    this.setState({ inProgress: true });
    const hash = {
      name: this.state.name,
      bucketType: this.state.bucketType,
      expectedEnrollment: this.state.expectedEnrollment,
      color: this.state.color,
      description: this.state.description,
      provider: this.state.provider,
    };

    authApiClient.request(ADD_BUCKET_ITEM, hash)
      .then((data) => {
        console.log(data.createBucket.bucket);
        this.props.BucketListStore.bindAdditionalBucket(data.createBucket.bucket);
        this.props.closeModal();
      }).catch((response) => {
        console.log(response);
      }).finally(() => {
        this.setState({ inProgress: false });
      });
  }

  render() {
    const {
      name, provider, bucketType, color, inProgress,
    } = this.state;

    return (
      <PopupDiv>
        <PopupHeader>
          Создать счет
        </PopupHeader>
        <PopupBody>
          <PopupColumn>
            <FormSelect
              name="Тип"
              errors={[]}
              onInputChange={this.handleBucketType}
            />
            <FormInput
              name="Название"
              errors={[]}
              onInputChange={this.handleName}
            />
            <FormInput
              name="Провайдер"
              errors={[]}
              onInputChange={this.handleProvider}
            />
            <FormTextArea
              name="Описание"
              errors={[]}
              onInputChange={this.handleDescription}
            />
            <FormCurrencyInput
              name="Ожидаемые поступления"
              errors={[]}
              onInputChange={this.handleExpectedEnrollment}
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
              name="Цвет"
              errors={[]}
              onInputChange={this.handleColor}
            />
          </PopupColumn>

          <ButtonBlock>
            <PrimaryBlockButton
              sendRequest={this.sendBucketCreateRequest}
              loading={inProgress}
              buttonName="Создать"
              buttonEnabled
            />
          </ButtonBlock>

        </PopupBody>
      </PopupDiv>
    );
  }
}));

export default AddBucketPopup;
