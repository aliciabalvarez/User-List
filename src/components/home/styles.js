import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledH1 = styled.h1`
        color: #565656;
    margin-bottom: 2vh;
    margin-top: 5vh;
    text-align: center;
`

const StyledContain = styled.div`
    display: flex;
    align-items:center;
    width: 450px;
    padding: 0 20px;
    margin: auto;
    margin-bottom: 23px;
    box-shadow: 0px 0px 7px 0px #00000042;
    border-radius: 10px;
    justify-content: space-between;
`
const StyledImg = styled.img`
        width: 60px;
    border-radius: 50%;
`
const StyledOptionsMenu = styled.div`
    display: flex;
    width: 450px;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 2vh;
`
const StyledActive = styled.p`
        color: green;
`
const StyledInactive = styled.p`
        color: red;
`
export { StyledContain, StyledImg, StyledH1, StyledOptionsMenu, StyledActive, StyledInactive };
