import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #23ce6b;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  height: 64px;
  pointer-events: none;
`;

const Header = () => (
  <HeaderWrapper>
    <Title>This is your Kanban board</Title>
  </HeaderWrapper>
);

export default Header;
