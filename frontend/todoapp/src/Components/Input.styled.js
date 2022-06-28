import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 14px;
  margin: 20px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%
  ::placeholder {
    color: palevioletred;
  }
`;

export default Input;