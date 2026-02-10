"use client";

import "../public/style/reset.css";
import React, { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { useServerInsertedHTML } from "next/navigation";

const LayoutComp = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styleTags = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styleTags}</>;
  });

  if (typeof window !== "undefined")
    return (
      <html lang="ko">
        <body>{children}</body>
      </html>
    );

  return (
    <StyleSheetManager sheet={sheet.instance}>
      <html lang="ko">
        <body>{children}</body>
      </html>
    </StyleSheetManager>
  );
};

export default LayoutComp;
