import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;

    border-bottom: 1px solid #EFEFEF;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const LinkTo = styled(NavLink)`
    text-decoration: none;
    font-weight: bold;
    position: relative;

    &.active {
        color: red;

        &::before {
            opacity: 1;
            transition: opacity 0.8s;
        }
    }

    &::before {
        content: "";
        position: absolute;
        top: 20px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: red;
        opacity: 0;
    }
`;