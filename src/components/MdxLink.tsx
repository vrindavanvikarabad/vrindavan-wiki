import { Link } from "react-router-dom";
import type { AnchorHTMLAttributes } from "react";

// Renders links inside MDX content. Internal links (starting with "/") go
// through React Router's Link so they respect the router basename and don't
// trigger a full page reload. External links open in a new tab.
export default function MdxLink({
  href = "",
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  );
}
