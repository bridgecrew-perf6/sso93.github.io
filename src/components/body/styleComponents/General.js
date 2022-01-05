import styled from 'styled-components';
import { colors } from './theme';

export const H1 = styled.h1`
    color: ${colors.yellow};
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
`;

export const Form = styled.form`
    background-color: ${colors.lightGray};
    border-radius: 1rem;
    width: 40%;
    margin: 10px auto 10px auto;
    padding: 3em;
`;

export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;
export const Error = styled.p`
    color: ${colors.red};
    color: red;
    font-size: 12px;
    margin-top: 5px;
`;
