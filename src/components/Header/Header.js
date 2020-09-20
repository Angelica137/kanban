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

const Header = () => (
  <HeaderWrapper>
    <h1>This is your Kanban</h1>
  </HeaderWrapper>
);

export default Header;
