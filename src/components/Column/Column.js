import React from "react";
import styled from "styled-components";
import Ticket from "../Ticket/Ticket";

const ColumnWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  background: LightGray;
  border-radious: 20px;
  min-height: 50vh;
  width: 20vw;

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

const TicketsWrapper = styled.div`
  padding: 5%;
`;

const Alert = styled.dv`
  text-align: center;
`;

const Column = ({ tickets, loading, error, title }) => (
  <ColumnWrapper>
    <Title>{title}</Title>
    {(loading || error) && <Alert>{loading ? "Loading..." : error}</Alert>}
    <TicketsWrapper>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </TicketsWrapper>
  </ColumnWrapper>
);

export default Column;
