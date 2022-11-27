import IconButton from 'core/IconButton'
import * as React from 'react'
import { TbX } from 'react-icons/tb'

import { BaseModalContainer, BaseModalContent } from './styles'

interface BaseModalProps {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

const BaseModal: React.FC<BaseModalProps> = ({ children, open, onClose }) => {
  return (
    <BaseModalContainer open={open}>
      <BaseModalContent>
        <IconButton
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <TbX />
        </IconButton>
        {children}
      </BaseModalContent>
    </BaseModalContainer>
  )
}

export default BaseModal
