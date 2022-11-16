import React, { useState } from "react";
import styled from "styled-components";
import CardFront from "../assets/bg-card-front.png";
import CardLogo from "../assets/card-logo.svg";

function CardDetails() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardOwner, setCardOwner] = useState("Badu Jghenti");
  const [cardDate, setCardDate] = useState("00/00");
  
  return (
    <div>
      <CardFrontContainer>
        <ImgContainer>
          <img
            style={{ width: "54px", height: "30px" }}
            src={CardLogo}
            alt="card-logo"
          />
        </ImgContainer>
        <CardNumbers>
          <h4>{cardNumber}</h4>
          <CardOwner>
            <h5>{cardOwner}</h5>
            <h5>{cardDate}</h5>
          </CardOwner>
        </CardNumbers>
      </CardFrontContainer>
    </div>
  );
}

export default CardDetails;

const CardFrontContainer = styled.div`
  position: absolute;
  width: 285px;
  height: 157px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  top: 126px;
  left: 0;

  background: url(${CardFront}) no-repeat;
  background-size: contain;
  padding: 17px 19px;
`;

const ImgContainer = styled.div``;

const CardNumbers = styled.div`
  display: flex;
  gap: 17px;
  flex-direction: column;
  h4 {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 2.2px;
    color: #ffffff;
    margin: 0;
  }
`;

const CardOwner = styled.div`
  display: flex;
  justify-content: space-between;
  h5 {
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`;
