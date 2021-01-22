// Write your Character component here

import React from 'react';
import styled from 'styled-components';


export default function Character (props) {

    // console.log(props);

    return (
        <DivStyle>
            <h2>{props.person.name}</h2>
            <p>Mass: {props.person.mass}</p>
        </DivStyle>
    )

} 

const DivStyle = styled.div`
    background-color: tan;
    width: 50%;
    margin: auto;
    display: flex;
    margin-bottom: 14px;
    border-radius: 8px;

    h2 {
        padding: 12px;
        justify-content: flex-start;
        margin-left: 2%;
        color: darkolivegreen;
    }

    p {
        display: flex;
        justify-content: flex-end;
        flex-grow: 1;
        margin-right: 5%;
        padding-top: 20px;
        font-weight: bold;
        color: darkolivegreen;
    }
`;
