import React from "react";
import { zoomIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const zoomInAnimation = keyframes`${zoomIn}`;

export const ZoomInDiv = styled.div`
  border: 1px solid blue;
  animation: 4s ${zoomInAnimation};
  padding: 1% 0 1% 1%;
  font-size: 1.6rem;
  text-align: center;
  letter-spacing: 2.2rem;
  color: whitesmoke;
`;
