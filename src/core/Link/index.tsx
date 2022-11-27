import React, { ReactNode } from 'react'

import { LinkButton, LinkNext, LinkProps } from './styles'
import { LinkProps as NextLinkProps } from 'next/link'

type CustomLinkProps = NextLinkProps &
  LinkProps & {
    children: ReactNode
    target?: string
  }

const Link: React.FC<CustomLinkProps> = ({
  children,
  href,
  target,
  variant,
  fontSize,
  p,
  color,
  mt,
  align,
}) => {
  return (
    <LinkNext href={href} passHref>
      <LinkButton
        target={target}
        rel="nofollow"
        variant={variant}
        fontSize={fontSize}
        p={p}
        color={color}
        mt={mt}
        align={align}
      >
        {children}
      </LinkButton>
    </LinkNext>
  )
}

export default Link
