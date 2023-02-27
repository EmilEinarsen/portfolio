import { MetaFunction } from "@remix-run/node";
import { UnderConstructions } from "~/components/UnderConstructions";

export const meta: MetaFunction = () => ({
  title: "Home | Emil Einarsen"
});

export default function Index() {
  return (
    <>
      <UnderConstructions />
    </>
  );
}
