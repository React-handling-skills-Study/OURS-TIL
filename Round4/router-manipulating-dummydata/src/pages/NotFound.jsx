import React from "react";
import styled from "@emotion/styled";

const Error = styled.div`
  font-size: 60px;
  color: darkgreen;
`;

const NotFound = () => {
  return <Error>404 Not Found</Error>;
};

export default NotFound;
