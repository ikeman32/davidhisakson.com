import { zoomIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const zoomInAnimation = keyframes`${zoomIn}`;

export const ZoomInDiv = styled.div`
  margin-top: 1rem;
  animation: 4s ${zoomInAnimation};
  padding: 1% 0 1% 1%;
  font-size: 1.6rem;
  text-align: center;
  letter-spacing: 2.2rem;
  color: whitesmoke;
`;

export const ZoomInDivM = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  animation: 4s ${zoomInAnimation};
  //padding: 1% 0 1% 1%;
  font-size: 1rem;
  text-align: center;
  color: whitesmoke;
`;
