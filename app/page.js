"use client";

import { Button, NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <Button color="primary">Hello World</Button>{" "}
      {/* This button will be styled with the primary color */}
    </NextUIProvider>
  );
}
