import React from "react";
import { NavLink } from "react-router-dom";

import Card from "./Card";
import mixins from "../../styles/mixins";
import styled from "../../utils/styled";

interface LadderProps {
  range: string;
  users?: number;
  problems?: number;
  complete?: number;
  ladderID: number;
}

const Ladder: React.FC<LadderProps> = ({
  range,
  users,
  problems,
  complete,
  ladderID
}) => {
  const content = complete ? (
    <Card content={[range, `${complete}%`]} fontSize={14} />
  ) : (
    <Card content={[range, users!, problems!]} fontSize={14} />
  );

  return <Container to={`/ladders/${ladderID}`}>{content}</Container>;
};

export default Ladder;

const Container = styled(NavLink)`
  width: 100%;
  display: flex;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.colors.white};
  ${mixins.dropDecoration};
`;
