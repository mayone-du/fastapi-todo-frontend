import Link from "next/link";
import { memo } from "react";

export const Header: React.VFC = memo(() => {
  return (
    <header className="px-32">
      <nav className="flex justify-between items-center">
        <div className="m-2">
          <Link href="/">
            <a>logo</a>
          </Link>
        </div>
        <ul className="flex">
          <li className="m-2">
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li className="m-2">
            <Link href="/auth/signup">
              <a>SignUp</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});

Header.displayName = "Header";
