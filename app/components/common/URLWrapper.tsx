import Link from "next/link";
import { ReactNode } from "react";

export default function URLWrapper({
  children,
  className,
  href,
  isNewTab = false,
}: {
  children: ReactNode;
  className: string;
  href?: string | null;
  isNewTab?: boolean;
}) {
  return href ? (
    <Link
      {...(isNewTab && { target: "_blank" })}
      href={href}
      className={className}
    >
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}
