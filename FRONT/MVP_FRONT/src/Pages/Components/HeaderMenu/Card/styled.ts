import styled from "styled-components"
import THEME from "../../../../theme"

export const MainCard = styled.main `
position: absolute;
margin-top: 23px;
width: 15%;
background-color: ${ THEME.COLORS.WHITE };
color: ${ THEME.COLORS.BLACK };
cursor: default;
border: 2px solid;
box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);

a.x {
    color: ${ THEME.COLORS.BLACK };
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: 10px;
    background-color: #C0C0C0;
    border-bottom: 1px solid;

    &:hover {
        transition:  0.7s;
        background-color: #8B0000;
    }
  
}


section {
    display: flex;
    border-bottom: 1px solid;
    margin: 5%;
    gap: 15px;

    img {
            margin-bottom: 10px;
    }

    div.info {
        margin-top: 10px;
         display: flex;
         flex-direction: column;
         gap: 5px;

         p {
            font-size: 14px;
         }

         button {
            cursor: pointer;
            background: none;
            border: none;
            border-bottom: 1px solid;
            width: 50px;

            &:hover {
                transition:  0.2s;
                color: #FF0000;
            }
         }
    }
}

a.continuarCompra {
    color: ${ THEME.COLORS.BLACK };
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    &:hover {
        transition:  0.4s;
        color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
    }
}
`