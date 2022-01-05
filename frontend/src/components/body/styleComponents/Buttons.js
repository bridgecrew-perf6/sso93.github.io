import styled from 'styled-components';
import { colors } from './theme';

export const Button = styled.button`
    width: 100%;
    background-color: ${colors.pink};
    padding: 10px;
    color: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease;
    &:hover {
        background-color: ${colors.yellow};
    }
`;
