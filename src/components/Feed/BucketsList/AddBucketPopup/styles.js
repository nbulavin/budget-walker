import styled from 'styled-components';
import { BlockDiv } from "../../../common/styles";
import {COLORS} from "../../../../const/colors";

export const PopupDiv = styled(BlockDiv)`
  width: 300px;
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
`;
