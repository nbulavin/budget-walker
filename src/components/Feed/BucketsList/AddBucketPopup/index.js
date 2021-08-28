import React from 'react';
import FormInput from '../../../common/Form/Input';
import FormSelect from '../../../common/Form/Select';
import { PopupBody, PopupDiv, PopupHeader } from './styles';

class AddBucketPopup extends React.Component {
  render() {
    return (
      <PopupDiv>
        <PopupHeader>
          Добавить счет
        </PopupHeader>
        <PopupBody>
          <FormInput
            name={"Название *"}
            defaultText={"Моя карта"}
            errors={[]}
            onInputChange={console.log("test2")}
          />

          <FormSelect
            name={"Тип *"}
            defaultText={"Тип счета"}
            errors={[]}
            onInputChange={console.log("test2")}
          />

          <FormInput
            name={"Провайдер"}
            defaultText={"ВТБ"}
            errors={[]}
            onInputChange={console.log("test3")}
          />

          <div>
            Описание
            <input placeholder="Опционально"/>
          </div>

          <div>
            Цвет
            <input placeholder="Опционально"/>
          </div>

          <div>
            Ожидаемое поступление
            <input placeholder="Опциональное описание"/>
          </div>
        </PopupBody>
      </PopupDiv>
    )
  }
}

export default AddBucketPopup;