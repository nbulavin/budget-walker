import styled from 'styled-components';
import COLORS from '../../../../const/colors';

const color = COLORS.title;

export const PlusIcon = styled.div`
  font-size: 40px;
  margin: auto;
  border: 3px solid;
  border-radius: 30px;
  display: inline-block;
  width: 50px;
  height: 50px;
  background: linear-gradient(${color}, ${color}), linear-gradient(${color}, ${color}), #fff;
  background-position: center;
  background-size: 50% 2px, 2px 50%;
  background-repeat: no-repeat;
`;
