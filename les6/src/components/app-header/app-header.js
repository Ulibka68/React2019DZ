import React from "react";

import styled from "styled-components";

const Header = styled.div`
    align-items: flex-end;
    justify-content: space-between;
    display : flex;

    h1 { 
        font-size: 26px;      
        color : ${props => props.colored ? 'red' : 'black'}; 
        :hover { color : blue};
    }

    h2 {
        font-size: 1.2rem;
        color: grey;
      }
`;


const AppHeader = () => {
    return (
        // замена div на ссылку
        <Header as='a' colored>
            <h1>Гайрат Власов</h1>
            <h2>Записей 5, из них понравилось 1</h2>
        </Header>
    );
}
export default AppHeader;