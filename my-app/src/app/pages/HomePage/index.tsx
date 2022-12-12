import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const Warp = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  margin: 0;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 0;
`;

const TodoList = styled.div``;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  border-bottom: solid 1px black;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Maian</title>
        <meta name="description" content="To Do main임" />
      </Helmet>
      <Warp>
        <Main>
          <Title>To-Do</Title>
          <TodoList>
            <TodoItem><CheckBox type= 'checkbox'></CheckBox>이거해야함</TodoItem>
          </TodoList>
        </Main>
      </Warp>
    </>
  );
}
