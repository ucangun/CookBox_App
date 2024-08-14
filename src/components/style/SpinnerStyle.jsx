import styled from "styled-components";

export const SpinnerContainer = styled.div`
  align-self: center;
  margin-top: 5rem;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinnerWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #fff);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: rotate 1.5s infinite linear;

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default SpinnerContainer;
