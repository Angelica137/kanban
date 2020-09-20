import React from "react";
import styled from "styled-components";

const ColumnWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  background: LisghtGray;
  border-radious: 20px;
  min-height: 50vh;
  width: 2-vw;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const Column = ({ title }) => (
  <ColumnWrapper>
    <h2>this is a column</h2>
  </ColumnWrapper>
);

export default Column;
