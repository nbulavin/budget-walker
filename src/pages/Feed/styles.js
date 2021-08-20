import styled from 'styled-components';

export const InlinedDiv = styled.div`
  display: inline-block;
  width: ${(props) => props.blockWidth};
  padding: 10px;
`;

export const LeftAlignedDiv = styled.div`
  float: left;
  width: calc(${(props) => props.blockWidth} - 10px);
  margin-right: 10px;
`;

export const RightAlignedDiv = styled.div`
  float: right;
  width: calc(${(props) => props.blockWidth} - 10px);
  margin-left: 10px;
`;
