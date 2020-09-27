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

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ tickets: this.props.data });
    }
  }

  onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  onDragOver = (e) => {
    e.preventDefault();
  };

  onDrop = (e, columnId) => {
    const id = e.dataTransfer.getData("id");
    const tickets = this.state.tickets.filter((ticket) => {
      if (ticket.id === id) {
        ticket.column = columnId;
      }
      return ticket;
    });
    this.setState({
      ...this.state,
      tickets,
    });
  };

  render() {
    const { columns, loading, error } = this.props;

    return (
      <BoardWrapper>
        {columns.map((column) => (
          <Column
            key={column.id}
            columnId={column.id}
            title={column.title}
            loading={loading}
            error={error}
            onDragStart={this.onDragStart}
            onDragOver={this.onDragOver}
            onDrop={this.onDrop}
            tickets={this.state.tickets.filter(
              (ticket) => ticket.column === column.id
            )}
          />
        ))}
      </BoardWrapper>
    );
  }
}

export default withDataFetching(Board);
