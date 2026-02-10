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
    padding: 12px;
    background-color: #fff;
  }

  .box-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;

    .btn {
      width: calc(50% - 3px);
      height: 36px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 16px;
      color: #fff;

      &.submit {
        background-color: #5b415e;
        border: 1px solid #8a7b8c;
      }

      &.reset {
        background-color: #ccc;
        border: 1px solid #ababab;
      }
    }
  }
`;

export const WrapInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text-title {
    font-weight: 700;
    font-size: 16px;
  }

  .box-select {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 70%;

    .select {
      width: 100%;
      height: 32px;
      padding: 0 15px 0;
      border-radius: 4px;
      border: 1px solid #bec7d4;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.03em;
      color: #333;
    }

    .text-unit {
      margin-left: 6px;
      font-weight: 400;
      font-size: 16px;
    }
  }

  & + .box-input {
    margin-top: 16px;
  }
`;
