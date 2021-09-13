import React from 'react';
import { observer, inject } from 'mobx-react';
import FormInput from '../../../common/Form/Input';
import FormSelect from '../../../common/Form/Select';
import FormTextArea from '../../../common/Form/TextArea';
import FormCurrencyInput from '../../../common/Form/CurrencyInput';
import FormColorPicker from '../../../common/Form/ColorPicker';
import ObjectHelper from '../../../../helpers/ObjectHelper';
import { authRequestSender } from '../../../../helpers/requestSender';
import PrimaryBlockButton from '../../../common/buttons/PrimaryBlockButton';
import BucketItem from '../BucketItem';
import { ADD_BUCKET_ITEM } from '../../../../graphql/Feed/BucketListGql';
import {
  ButtonBlock,
  ExampleBody,
  PopupBody,
  PopupColumn,
  PopupDiv,
  PopupHeader,
} from './styles';

const AddBucketPopup = inject('BucketListStore', 'NewBucketStore')(observer(
  class AddBucketPopup extends React.Component {
    constructor(props) {
      super(props);
    }

    handleBucketType = (text) => {
      const { NewBucketStore } = this.props;
      NewBucketStore.bindBucketInfo('bucketType', text);
    }

    handleName = (text) => {
      const { NewBucketStore } = this.props;
      NewBucketStore.bindBucketInfo('name', text);
    }

    handleProvider = (text) => {
      const { NewBucketStore } = this.props;
      NewBucketStore.bindBucketInfo('provider', text);
    }

    handleDescription = (text) => {
      const { NewBucketStore } = this.props;
      NewBucketStore.bindBucketInfo('description', text);
    }

    handleExpectedEnrollment = (value) => {
      const { NewBucketStore } = this.props;
      NewBucketStore.bindBucketInfo('expectedEnrollment', value);
    }

    handleColor = (text) => {
      const { NewBucketStore } = this.props;
      NewBucketStore.bindBucketInfo('color', text);
    }

    handleRequestSuccess = (data) => {
      const { BucketListStore, NewBucketStore, closeModal } = this.props;
      const { bucket, errors } = data.createBucket;

      if (ObjectHelper.isEmpty(errors)) {
        BucketListStore.bindAdditionalBucket(bucket);
        NewBucketStore.clearStore();
        closeModal();
      } else {
        NewBucketStore.collectRequestErrors(errors);
      }
    }

    handleRequestFailure = (message, isAuthorizationError) => {
      const { NewBucketStore } = this.props;

      NewBucketStore.collectCommonErrors(message);
      NewBucketStore.finishProgress();
    }

    applyRequestFinalAction = () => {
    }

    sendBucketCreateRequest = () => {
      const { NewBucketStore } = this.props;
      NewBucketStore.startProgress();
      const {
        name, bucketType, expectedEnrollment, color, description, provider,
      } = NewBucketStore.params;
      const hash = {
        name, bucketType, expectedEnrollment, color, description, provider,
      };

      authRequestSender(
        ADD_BUCKET_ITEM,
        hash,
        this.handleRequestSuccess,
        this.handleRequestFailure,
        this.applyRequestFinalAction
      )
    }

    render() {
      const {
        params: { name, provider, bucketType, color, inProgress, }, errors
      } = this.props.NewBucketStore;

      return (
        <PopupDiv>
          <PopupHeader>
            Создать счет
          </PopupHeader>
          <PopupBody>
            <PopupColumn>
              <FormSelect
                name="Тип"
                errors={errors.bucketType}
                onInputChange={this.handleBucketType}
              />
              <FormInput
                name="Название"
                errors={errors.name}
                onInputChange={this.handleName}
              />
              <FormInput
                name="Провайдер"
                errors={errors.provider}
                onInputChange={this.handleProvider}
              />
              <FormTextArea
                name="Описание"
                errors={errors.description}
                onInputChange={this.handleDescription}
              />
              <FormCurrencyInput
                name="Ожидаемые поступления"
                errors={errors.expectedEnrollment}
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
  }
));

export default AddBucketPopup;
