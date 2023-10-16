"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  let pathname = usePathname();

  return (
    <Link href={href} className="relative block group">
      <div className="absolute flex items-center h-full -left-3">
        <div
          className={`${
            pathname === href
              ? "h-10"
              : "h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100"
          } w-1 transition-all duration-200 origin-left bg-white rounded-r`}
        ></div>
      </div>

      <div className="group-active:translate-y-px">
        <div
          className={`${
            pathname === href
              ? "rounded-2xl bg-brand text-white"
              : "text-gray-100 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white bg-gray-700 rounded-3xl"
          } flex items-center justify-center w-12 h-12 transition-all duration-200 overflow-hidden`}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}
