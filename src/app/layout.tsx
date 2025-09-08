"use client";

import "./globals.css";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store/index";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
