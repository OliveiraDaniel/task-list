import styled from 'styled-components'

interface ButtonProps {
  bgColor?: string
}

// Estilos para o modal
export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    padding: 12px;
  }
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  width: 100%;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

export const Textarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  resize: vertical;
  width: 100%;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

export const Button = styled.button<ButtonProps>`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.color};
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 20px;
  width: 200px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`

export const Select = styled.select`
  margin: 1rem 0;
  padding: 0.5rem;
  font-size: 1rem;
`

export const Option = styled.option`
  font-size: 1rem;
`
