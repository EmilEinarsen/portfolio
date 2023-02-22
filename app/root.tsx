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

import stylesheet from "~/tailwind.css";
import { ThemeHead, ThemeBody, ThemeProvider } from "./utils/theme-provider";
import { loadTheme } from "./utils/theme.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  return await loadTheme(request)
}

export default function App() {
  const { theme } = useLoaderData() as ReturnType<typeof loader>

  return (
    <ThemeProvider specifiedTheme={theme}>
      <html lang="en" className={theme}>
        <head>
          <Meta />
          <Links />
          <ThemeHead ssrTheme={Boolean(theme)} />
        </head>
        <body className="dark:bg-black">
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
