import styled from "styled-components";
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 0.5em;
  padding: 0.65em 1em;
  border: 3px solid palevioletred;
  border-radius: 3px;
`;
export default Button;