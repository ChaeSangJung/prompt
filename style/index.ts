import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background-color: #c1afc4;

  .inner-cont {
    overflow-y: scroll;
    width: 100%;
    height: 100vh;
    max-width: 500px;
    background-color: #fff;
  }
`;
