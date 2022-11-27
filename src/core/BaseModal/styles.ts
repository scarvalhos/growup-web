import styled from 'styled-components'

const BaseModalContainer = styled.dialog`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  outline: none;
  z-index: 999;
`

const BaseModalContent = styled.div`
  background: ${({ theme }) => theme.colors.shape_dark};
  padding: 2rem;
  border-radius: 6px;
  max-width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export { BaseModalContainer, BaseModalContent }
