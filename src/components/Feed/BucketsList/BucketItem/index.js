import React from 'react';
import {ItemDiv, ItemFooter, ItemHeader, ItemTitle, PriceInFooter} from './styles';

class BucketItem extends React.Component {
  render() {
    return (
      <ItemDiv>
        <ItemHeader>
          ВТБ
        </ItemHeader>
        <ItemTitle>
          Основная зарплатная карта
        </ItemTitle>
        <ItemFooter>
          <div>
            Иконка
          </div>
          <PriceInFooter>
            1882 р.
          </PriceInFooter>
        </ItemFooter>
      </ItemDiv>
    );
  }
}

export default BucketItem;
