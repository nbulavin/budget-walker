import React from 'react';
import { observer, inject } from 'mobx-react';
import FormInput from '../../../common/Form/Input';
import FormSelect from '../../../common/Form/Select';
import FormTextArea from '../../../common/Form/TextArea';
import FormCurrencyInput from '../../../common/Form/CurrencyInput';
import FormColorPicker from '../../../common/Form/ColorPicker';
import ObjectHelper from '../../../../helpers/ObjectHelper';
import NewBucketStore from '../../../../stores/NewBucketStore';
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

const AddBucketPopup = inject('BucketListStore', 'UserStore')(observer(
  class AddBucketPopup extends React.Component {
    constructor(props) {
      super(props);

      this.store = new NewBucketStore();
    }

    handleBucketType = (text) => {
      this.store.bindBucketInfo('bucketType', text);
    }

    handleName = (text) => {
      this.store.bindBucketInfo('name', text);
    }

    handleProvider = (text) => {
      this.store.bindBucketInfo('provider', text);
    }

    handleDescription = (text) => {
      this.store.bindBucketInfo('description', text);
    }

    handleExpectedEnrollment = (value) => {
      this.store.bindBucketInfo('expectedEnrollment', value);
    }

    handleColor = (text) => {
      this.store.bindBucketInfo('color', text);
    }

    handleRequestSuccess = (data) => {
      const { BucketListStore, closeModal } = this.props;
      const { bucket, errors } = data.createBucket;

      if (ObjectHelper.isEmpty(errors)) {
        BucketListStore.bindAdditionalBucket(bucket);
        this.store.clearStore();
        closeModal();
      } else {
        this.store.collectRequestErrors(errors);
      }
    }

    handleRequestFailure = (message, isAuthorizationError) => {
      this.store.collectCommonErrors(message);
      this.store.finishProgress();
    }

    applyRequestFinalAction = () => {
    }

    sendBucketCreateRequest = () => {
      this.store.startProgress();
      const {
        name, bucketType, expectedEnrollment, color, description, provider,
      } = this.store.params;
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
      } = this.store;

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
