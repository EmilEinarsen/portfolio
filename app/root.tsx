import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import clsx from "clsx";

import stylesheet from "~/tailwind.css";
import { ThemeHead, ThemeBody, ThemeProvider } from "./utils/theme-provider";
import { loadTheme } from "./utils/theme.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home | Emil Einarsen",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  return await loadTheme(request)
}

export default function App() {
  const { theme } = useLoaderData() as ReturnType<typeof loader>

  return (
    <ThemeProvider specifiedTheme={theme}>
      <html lang="en" className={clsx(theme, 'scroll-smooth')}>
        <head>
          <Meta />
          <Links />
          <ThemeHead ssrTheme={Boolean(theme)} />
        </head>
        <body className="scroll-smooth relative flex min-h-screen flex-col gap-20 bg-zinc-900">
          <Outlet />
          <ThemeBody ssrTheme={Boolean(theme)} />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </ThemeProvider>
  );
}
