import React from "react";
import { TopNav } from "./TopNav";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <TopNav />
      {/* dynamic content */}
      <main className="main"> {children} </main>

      {/* footer */}

      <footer className="footer bg-dark text-light p-5 text-center">
        &copy; copyright all rights reserved. Build with 🧡.
      </footer>
    </div>
  );
};
