import React from "react"
import Tournaments from "./tournamets/page"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
          </nav>
          <h1>SEXOOOOOOOOOOOOOOOO</h1>
          {children}
        </main>
      </body>
    </html>
  );
}