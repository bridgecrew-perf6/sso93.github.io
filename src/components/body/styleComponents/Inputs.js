import styled from 'styled-components';
import { colors } from './theme';

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    font-size: 16px;

    box-sizing: border-box;
    &:focus {
        outline: none;
        border: 1px solid #000;
    }
`;
