import React from "react";
import styled from "styled-components"


const Box = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: solid 1px black;
`;

const TextField = styled.input`
    width: 100%;
    border: none;
`

export default function TodoInput() {
    return <Box><TextField placeholder="할일 여기 적으셈"/></Box>
}