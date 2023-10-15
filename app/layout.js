import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen text-white">
          <div className="bg-stone-800 p-4">
            <div className="rounded-full bg-white w-12 h-12 text-stone-800 flex items-center justify-center">
              TW
            </div>
          </div>
          <div className="bg-stone-700 w-60 flex flex-col">
            <div className="p-4 shadow-md">Tailwind CSS</div>
            <div className="p-4 flex-1">channels</div>
          </div>
          <div className="bg-stone-600 flex flex-col flex-1">
            <div className="p-4 shadow-md">General</div>
            <div className="p-4 flex-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
