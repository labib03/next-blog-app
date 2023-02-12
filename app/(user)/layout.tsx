/* eslint-disable @next/next/no-head-element */
import React from "react";
import "@styles/globals.scss";
import {Banner, Header} from "@components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
      <div>
      <Header />
          <Banner />
      {children}
      </div>
      </body>
    </html>
  );
}
