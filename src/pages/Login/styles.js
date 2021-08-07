import styled from 'styled-components';
import { COLORS } from '../../const/colors';

const backgroundColor = COLORS.blockBackground;

export const BackgroundDiv = styled.div`
    width: 100%;
`;

export const NarrowDiv = styled.div`
    width: 350px;
    position: relative;
    margin: auto;
    background-color: ${backgroundColor};
    padding: 20px 6px;
    border-radius: 10px;
`;
