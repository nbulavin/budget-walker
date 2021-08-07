import styled from 'styled-components';
import { COLORS } from '../const/colors';

export const AppDiv = styled.div`
         text-align: center;
         background-color: ${COLORS.appBackground};
         min-height: 100vh;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         font-size: 10px;
         color: black;
`;
