import React, { Component } from "react";
import styled from "styled-components";
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

class Board extends Component {
  render() {
    const columns = [
      { id: 1, title: "To Do" },
      { id: 2, title: "In Progress" },
      { id: 3, title: "Review" },
      { id: 4, title: "Done" },
    ];

    return (
      <BoardWrapper>
        {columns.map((column) => (
          <Column key={column.id} title={column.title} />
        ))}
      </BoardWrapper>
    );
  }
}

export default Board;
