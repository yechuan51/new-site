import "styles/global.css";
import React from "react";

type RootLayoutPropsType = {
  children: React.ReactNode;
};


const RootLayout = ({ children }: RootLayoutPropsType) => {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
