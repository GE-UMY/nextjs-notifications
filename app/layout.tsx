// app/layout.js

import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "GFG Notifications",
  description: "GFG Notifications - Send and receive notifications",
};

import React, { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {


  return (
    <html lang="en">
      <body className="min-h-screen">

        <nav className="bg-gray-200 shadow shadow-gray-300
                 w-100 px-8 md:px-auto">
          <div className="md:h-16 h-28 mx-auto md:px-4
                     container flex items-center justify-between
                      flex-wrap md:flex-nowrap">
            {/* Logo */}
            <div className="text-indigo-500 md:order-1">
              <img className="h-10" src="logo.png"
                alt="Notifications" />
            </div>
            <div className="text-gray-500 order-3 
                        w-full md:w-auto md:order-2">
              <ul className="flex font-semibold
                                           justify-between">
                <li className="md:px-4 md:py-2 
                                text-green-500">
                  <Link href="/">Home</Link>
                </li>
                <li className="md:px-4 md:py-2 
                                hover:text-green-400">
                  <Link href="/add">
                    Send Notification
                  </Link>
                </li>

              </ul>
            </div>
            <div className="order-2 md:order-3">
              <img className="h-6"
                src="notification.png"
                alt="Notifications" />
            </div>
          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}
