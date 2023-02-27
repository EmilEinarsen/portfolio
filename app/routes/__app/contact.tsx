import { MetaFunction } from '@remix-run/node';
import React from 'react'
import { Link } from '~/components/Link';

export const meta: MetaFunction = () => ({
  title: "Contact | Emil Einarsen"
});

const ICONS = {
  Mail: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-1 inline-block h-4 w-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
    </svg>
  ),
  LikedIn: (
    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 24 24" className="mr-1 inline-block h-3 w-3">
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
    </svg>
  )
}

const Contact = () => {
  return (
    <div className='md:prose-lg prose'>
      <h2 className="text-zinc-100 uppercase text-5xl md:text-6xl lg:text-8xl font-black px-4">
        Contact
      </h2>
      <div className="prose prose-invert max-w-2xl px-4">
        <p className="mt-6 max-w-xl">
          Creating something interesting and need a pair of hands? I would love to chat! Send
          me email or message on LikedIn and we can schedule a time to talk.
        </p>
        <p>
          {ICONS.Mail}
          <a href="mailto:emil@hagatun.se">emil@hagatun.se</a>
        </p>
        <p>
          {ICONS.LikedIn}
          <Link to="https://www.linkedin.com/in/emil-einarsen/">@Emil Einarsen</Link>
        </p>
      </div>
    </div>
  )
}

export default Contact