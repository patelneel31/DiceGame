import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dices/dice_${currentDice}.png`} alt="Dice" />
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
    font-weight: bold;
  }

  .dice {
    cursor: pointer;
  }
`;
