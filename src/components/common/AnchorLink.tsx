import Link, { LinkProps } from "next/link";
import { ReactChild } from "react";
import { A } from "../../UI/Anchors";

type Props = LinkProps & { children: ReactChild; target?: string };

export default function AnchorLink(props: Props) {
  return (
    <Link {...props}>
      <A target={props.target}>{props.children}</A>
    </Link>
  );
}
