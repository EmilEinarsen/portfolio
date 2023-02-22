import { Link as InternalLink } from '@remix-run/react'
import React from 'react'

export interface LinkProps extends React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
	to?: string
}

export const Link = ({ to, ...props }: LinkProps) =>
	/^https?:\/\//.test(to??'') ? 
  <a 
    {...props} 
    href={to}
    rel="noopener"
  >    
    {props.children}
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
		: <InternalLink {...props} to={to??'#'} />
