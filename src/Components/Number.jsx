import React, { useState } from 'react';
import styled from 'styled-components';

const Number = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  // Handle selection and reset the error if it exists
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    if (error) setError('');  // Clear error when a valid selection is made
  };

  return (
    <NumberSelectorContainer>
      {/* Conditionally render error message if present */}
      {error && <p className='error'>{error}</p>}
      <div className='flex'>
        {arrNumber.map((value) => (
          <Box
            isSelected={value === selectedNumber}
            key={value} // Using value as the key (more unique than index)
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      {!error && <p>Select the Number</p>} {/* Only show this if no error */}
    </NumberSelectorContainer>
  );
};

export default Number;

// Styled component for the number selector container
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .error {
    color: red;
  }
`;

// Styled component for the Box with conditional styling
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 800;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  cursor: pointer;
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
`;
