import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from "@remix-run/react";
import clsx from "clsx";
import { ClientOnly } from "remix-utils";

import { Link } from "~/components/Link";
import { useOnClickOutside } from "~/utils/hooks/useClickOutside";

const Header = () => {
  return (
    <>
      <header className="lg:grid grid grid-cols-header-base w-full">
        <h1 className="fixed top-[-6px] -left-1 text-4xl lg:-top-2 lg:text-5xl z-20 font-black uppercase leading-none text-zinc-100">
          <Link to="/">
            Emil
            <br />
            Einarsen<span className="text-sky-500">.</span>
          </Link>
        </h1>
        <div className="ml-auto w-9/12 h-32 xl:h-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" className="fill-sky-900 z-10 h-full">
            <path fillRule="evenodd" d="M1440 90h-90V0h90v90zm-270 0h-90V0h90v90zm90 90h-90V90h90v90zm-360 0h-90V90h90v90zm90-90h-90V0h90v90zm-180 0h-90V0h90v90zm-540 0h-90V0h90v90zm360 90h-90V90h90v90zM360 90h-90V0h90v90zm180 0h-90V0h90v90zm-360 90H90V90h90v90zM90 90H0V0h90v90z"></path>
          </svg>
        </div>
      </header>
    </>
  )
}

const Footer = () => {
  return (
    <footer className="border-t-2 border-t-sky-900 py-8 px-4 mt-auto">
      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        <div className="lg:order-2 lg:w-1/2">
          <p className="text-base italic text-zinc-400">
            
          </p>
        </div>
        <div className="text-base text-zinc-400 lg:order-1 lg:w-1/2 lg:self-end">
          <p>
            © 2023
            Emil Einarsen - 
            <a href="mailto:emil@hagatun.se" className="underline">emil@hagatun.se</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

const LINKS = [
  {
    title: 'Home',
    href: '/',
  },
  /* {
    title: 'Work',
    href: '/work',
  }, */
  {
    title: 'Contact',
    href: '/contact',
  }
]

const SOCIAL_LINKS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 inline-block group" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
      </svg>
    ),
    title: 'Follow on GitHub',
    href: 'https://github.com/EmilEinarsen',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-[2px] h-7 w-7 inline-block group" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    title: 'Follow on LinkedIn',
    href: 'https://www.linkedin.com/in/emil-einarsen/',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 inline-block group" fill="currentColor">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
      </svg>
    ),
    title: 'Email me',
    href: 'mailto:emil@hagatun.se',
  }
]

const DesktopNavigation = () => {
  
  return (
    <nav className="hidden lg:block lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-3 sticky self-start top-[150px]">
      <ul className="flex flex-col gap-3 text-xl font-bold uppercase tracking-wide text-zinc-100">
        {LINKS.map((item => (
          <li key={item.href}>
            <Link to={item.href} className="hover:text-sky-200 active:text-sky-500 transition-all hover:bg-zinc-800 py-2 pr-4 rounded-r-lg">
              — {item.title}
            </Link>
          </li>
        )))}
        {SOCIAL_LINKS.map(item => (
          <li key={item.href}>
            <Link to={item.href} aria-label={item.title} className="hover:text-sky-200 active:text-sky-500 transition-all hover:bg-zinc-800 py-2 pr-4 rounded-r-lg">
              — {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const MobileNavigation = () => {
  const menuRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useOnClickOutside([menuRef, buttonRef], () => setOpen(false))

  return (
    <>
      <nav 
        ref={menuRef}
        className={clsx(
          'fixed bottom-3 right-0 z-50 lg:hidden',
          'rounded-l border-l border-t border-b',
          'border-zinc-600 bg-zinc-900 py-8 pl-12',
          'transition-all opacity-0',
          open ? 'opacity-100 -translate-y-24' : 'invisible pointer-events-none',
        )}
      >
        <p className="relative -top-[4px] mb-8 text-right text-4xl font-black uppercase leading-none text-zinc-100">
          <a href="/">
            Emil Einarsen<span className="text-sky-500">.</span>
          </a>
        </p>
        <ul className="flex flex-col items-end gap-4 text-xl font-bold uppercase tracking-wide text-zinc-200">
          {LINKS.map((item => (
            <li key={item.href}>
              <Link to={item.href} className="hover:text-sky-200 active:text-sky-500 transition-all hover:bg-zinc-800 py-2 pl-4 rounded-r-lg">
                {item.title} —
              </Link>
            </li>
          )))}
        </ul>
        <div className="mt-8 mr-4 flex justify-end gap-6">
          {SOCIAL_LINKS.map(item => (
            <Link key={item.href} to={item.href} aria-label={item.title} className="-m-1 p-1 text-zinc-400 transition hover:text-sky-300">
              {item.icon}
            </Link>
          ))}
        </div>
      </nav>
      <div 
        className={clsx(
          'fixed inset-0 z-40 h-screen w-screen lg:hidden',
          'bg-black/60  backdrop-blur-sm',
          'motion-safe:transition-all opacity-0',
          open ? 'opacity-100' : 'invisible pointer-events-none',
        )}
      />
      <button 
        ref={buttonRef}
        type="button" 
        aria-label="Open Navigation Menu" 
        className={clsx(
          'inline-flex lg:hidden items-center fixed bottom-5 right-5 ',
          'bg-sky-500 p-3 text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          'z-50 rounded-full border border-transparent'
        )}
        onClick={() => setOpen(v => !v)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" className="origin-center motion-safe:transition-all" d="M 4 8 L 20 8" style={{ transform: open ? 'rotate(45deg) translateY(4px)' : 'rotate(0deg) translateY(0px)' }}></path>
          <path strokeLinecap="round" strokeLinejoin="round" className="origin-center motion-safe:transition-all" d="M 4 16 L 20 16" style={{ transform: open ? 'rotate(135deg) translateY(-4px)' : 'rotate(0deg) translateY(0px)' }}></path>
        </svg>
      </button>
    </>
  )
} 


export default function Route() {
  return (
    <>
      <Header />
      <div className=" lg:grid lg:grid-cols-9">
        <DesktopNavigation />
        <ClientOnly>
          {() => <MobileNavigation />}
        </ClientOnly>
        <main className="relative lg:col-start-3 lg:col-end-10 lg:row-start-1 lg:row-end-2">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}