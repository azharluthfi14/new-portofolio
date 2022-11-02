import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  // Put Header or Footer Here
  return (
    <>
      <Header /> {children} <footer>Footer</footer>
    </>
  );
}
