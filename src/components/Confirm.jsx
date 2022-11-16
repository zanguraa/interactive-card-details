import React from "react";
import styled from "styled-components";

function Confirm() {
  return (
    <div>
      <ButtonConfirm>Confirm</ButtonConfirm>
    </div>
  );
}

export default Confirm;

const ButtonConfirm = styled.button`
  background: #21092f;
  border-radius: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 53px;
`;
