import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <div bg={"#1E1E1E"}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>

    </>
  )
}
