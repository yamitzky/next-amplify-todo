import React, { AnchorHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import Link, { LinkProps } from 'next/link'

type Props = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

const StyledText = styled.a`
  color: #00a6bc;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

const StyledLink: React.FC<Props> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  onError,
  prefetch,
  ...rest
}) => {
  return (
    <Link
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      onError={onError}
      prefetch={prefetch}
      passHref
    >
      <StyledText {...rest} />
    </Link>
  )
}

export default StyledLink
