import styled from "styled-components";
 export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 77px;
  min-width: 520px;
  font-size: 20px;
  border: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    font-weight: bold;
    
    transition: 0.3s background ease-in;
  }`;

  export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  b
   &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    
   }
  `;
   