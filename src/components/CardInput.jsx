import React from "react";
import styled from "styled-components";
import Confirm from "./Confirm";

function CardInput() {
  return (
    <CardInputContainer>
      <label>
        CARDHOLDER NAME
        <input style={{ height: "45px", borderRadius: '8px', border: "1px solid #DFDEE0"}} placeholder="e.g Jane Appleseed" />
      </label>
      <label>
        CARD NUMBER
        <input style={{ height: "45px", borderRadius: '8px', border: "1px solid #DFDEE0"}} placeholder="e.g 1234 5678 9123 0000" />
      </label>
      <label>
        EXP. DATE (MM/YY) CVC
        <DateContainer>
          <input style={{width: "72px", height: "45px", borderRadius: '8px', border: "1px solid #DFDEE0"}} placeholder="MM" />
          <input style={{width: "72px", height: "45px", borderRadius: '8px', border: "1px solid #DFDEE0"}} placeholder="YY" />
          <input style={{width: "164px", height: "45px", borderRadius: '8px', border: "1px solid #DFDEE0"}} placeholder="e.g 123" />
        </DateContainer>
      </label>
      <Confirm />
    </CardInputContainer>
  );
}

export default CardInput;

const CardInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 20px;
  label {
    display: flex;
    flex-direction: column;
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #21092f;
    gap: 10px;
  }

  input {
    padding: 11px 16px;
  }
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
`;
