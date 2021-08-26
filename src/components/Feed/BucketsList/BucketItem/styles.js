import styled from 'styled-components';

export const ItemDiv = styled.div`
  border-radius: 12px;
  width: 160px;
  height: 120px;
  margin: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 9px rgb(0 0 0 / 13%);
  transition: 0.3s;
  opacity: 1;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const ItemHeader = styled.div`
  font-size: 20px;
  text-align: left;
  padding-left: 10px;
  padding-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 26.4px;
`;

export const ItemTitle = styled.div`
  height: 40px;
  font-size: 16px;
  text-align: left;
  line-height: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 2em;
`;

export const ItemFooter = styled.div`
  padding: 0 10px 5px 10px;
  display: flex;
  justify-content: space-between;
`;

export const IconInFooter = styled.div`
  max-width: 40px;
`;

export const PriceInFooter = styled.div`
  font-size: 18px;
`;
