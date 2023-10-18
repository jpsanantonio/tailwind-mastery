import "./globals.css";
import { Inter } from "next/font/google";
import NavLink from "@/components/NavLink";
import { Discord } from "@/components/icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

let servers = [
  { id: "1", img: "tailwind.png" },
  { id: "2", img: "next.png" },
  { id: "3", img: "mirage.png" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen text-gray-100">
          <div className="p-3 space-y-2 overflow-y-scroll bg-gray-900">
            <NavLink href="/">
              <Discord className="h-5 w-7" />
            </NavLink>

            <hr className="border-t-white/[.06] border-t-2 rounded mx-2" />

            {servers.map((server) => (
              <NavLink href={`/servers/${server.id}`} key={server.id}>
                <img src={`/servers/${server.img}`} alt="" />
              </NavLink>
            ))}
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
