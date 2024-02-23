import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const CardLink = styled(NavLink)`
    width: 250px;
    height: 450px;

    display: flex;
    flex-direction: column;

    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 24px;

    background-color: #101F4B;
    padding: 10px;
    border-radius: 10px;
    color: white;

    box-shadow: 3px 3px 10px black;
`
export const Image = styled.img`
border: 1px solid white
`

export const TitleContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`