import React from "react";
import {Navbar} from "@repo/ui/components/Navbar"

const template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default template;
