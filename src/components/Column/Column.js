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

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGrey;
`;

const Column = ({ title }) => (
  <ColumnWrapper>
    <Title>this is a column</Title>
  </ColumnWrapper>
);

export default Column;
