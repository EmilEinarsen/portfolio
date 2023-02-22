import { Outlet } from "@remix-run/react";

export default function Route() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>

      </footer>
    </>
  )
}