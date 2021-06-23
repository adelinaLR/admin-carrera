import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;
    height: 59px;
    left: 0px;
    top: 0px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    background: #696969;
    h1{
        left: 16px;
        top: 6.5px;
        font-family: Montserrat;
        font-size: 24px;
        align-items: center;
        font-weight: 700;
        letter-spacing: 0.1em;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 88px;
    }
`;

export const StyledTable = styled.table`
    position: static;
    thead{
        td{
            text-align: center;
            line-height: 200%;
            font-size: 16px;
            font-weight: 600;
            
        }
    }
    tbody{
        td{
            border-bottom: 1px solid;
            text-align: center;
            font-size: 16px;
            font-weight: 200;
            padding: 1px 7px;
            vertical-align:middle;
        }
        td:first-of-type{
            margin: 0;
            padding: 0;
            width: 17%;
        }
        td:nth-of-type(2){
            padding-left: 1px;
            width: 17%;
        }
        td:nth-of-type(3){
            width: 17%;
        }
        td:nth-of-type(4){
            width: 17%;
        }
        td:nth-of-type(5){
            width: 17%;
        }
        td:nth-of-type(6){
            width: 15%;
        }
    }
`