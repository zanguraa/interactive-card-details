import { useState } from "react";
import styled from "styled-components";
import CardBack from "./assets/bg-card-back.png";
import CardDetails from "./components/CardDetails";
import CardInput from "./components/CardInput";
import Thanks from "./components/Thanks";

function App() {
  const [thank, setThank] = useState(false);

  return (
    <>
    <CardContainer>
      <CardBackImage src={CardBack} alt="card-back" />
      <CardDetails />
      
    </CardContainer>
    {!thank ? <CardInput /> : <Thanks />}
    </>
  );
}

export default App;

const CardContainer = styled.div`
  position: relative;
  transform: translateX(-50%);
  width: 343px;
  height: 300px;
  left: 50%;
`;

const CardBackImage = styled.img`
  position: absolute;
  top: 32px;
  left: 50px;
  width: 286px;
  height: 157px;
`;
