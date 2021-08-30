import styled from 'styled-components';
import { BlockDiv } from "../../../common/styles";
import {COLORS} from "../../../../const/colors";

export const PopupDiv = styled(BlockDiv)`
  width: 600px;
  height: auto;
  padding: 0;
`;

export const PopupHeader = styled.div`
  background-color: ${COLORS.blockHeaderBackground};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  padding: 10px;
  font-size: 30px;
  color: ${COLORS.title};
  text-align: center;
  height: 40px;
`;

export const PopupBody = styled.div`
  padding: 0 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ExampleBody = styled.div`
  border: 2px solid ${COLORS.borderColor};
  height: 200px;
  width: 276px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  flex-wrap: wrap;
  justify-content: center;
  pointer-events: none;
  margin-bottom: 10px;
`;

export const PopupColumn = styled.div`
  width: 280px;
`;
