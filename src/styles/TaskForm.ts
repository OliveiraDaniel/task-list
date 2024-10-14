import styled from 'styled-components'

interface ButtonProps {
  bgColor?: string;
}

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  width: 500px;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 12px;
  }
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;

  &:focus {
    border-color: #007bff; /* Cor ao focar no input */
    outline: none; /* Remove o contorno padrão */
  }
`

export const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  resize: vertical;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

export const Button = styled.button<ButtonProps>`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 20px;
  width: 200px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

export const Select = styled.select`
  margin: 1rem 0;
  padding: 0.5rem;
  font-size: 1rem;
`

export const Option = styled.option`
  font-size: 1rem;
`
