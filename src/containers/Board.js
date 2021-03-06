import React, { Component } from "react";
import styled from "styled-components";
import withDataFetching from "../withDataFetching";
import Column from "../components/Column/Column";

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Board = ({ columns, loading, error, data }) => (
  <BoardWrapper>
    {columns.map((column) => (
      <Column
        key={column.id}
        title={column.title}
        loading={loading}
        error={error}
        tickets={data.filter((ticket) => ticket.column === column.id)}
      />
    ))}
  </BoardWrapper>
);

export default withDataFetching(Board);
