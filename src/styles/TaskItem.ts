import styled from 'styled-components'

export const TaskItemContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px 15px 0;
  margin: 8px;
  flex: 1 1 calc(20% - 16px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 230px;

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 16px);
  }

  @media (max-width: 480px) {
    flex: 1 1 calc(100% - 16px);
  }
`

export const Title = styled.h3`
  font-size: 16px;
  margin: 0 0 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  margin: 15px 0;
`

export const ContainerButtons = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0 0;
`
