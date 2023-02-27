import { Link as InternalLink } from '@remix-run/react'
import React from 'react'

export interface LinkProps extends React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>> {
	to?: string
}

export const Link = ({ to, ...props }: LinkProps) =>
	/^https?:\/\//.test(to??'') || /^mailto:/.test(to??'') ? 
  <a 
    {...props} 
    href={to}
    rel="noopener"
  >    
    {props.children}
    {/^https?:\/\//.test(to??'') && props.target === '_blank' && <span className="sr-only"> (opens in a new tab)</span>}
  </a>
		: <InternalLink {...props} to={to??'#'} />
