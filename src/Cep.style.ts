import styled from '@emotion/styled';

export const CepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
`;

export const InputsContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  border-radius: 8px;
  border: solid 2px gray;
  outline: none;
  width: 300px;
  height: 30px;
  padding: 8px;
`;

export const Button = styled.button`
  border-radius: 8px;
  border: solid 2px gray;
  outline: none;
  width: 200px;
  height: 30px;
  background-color: aliceblue;
`;
