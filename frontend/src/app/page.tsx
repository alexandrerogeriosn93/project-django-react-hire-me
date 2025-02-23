"use client";

import { ThemeProvider } from "@mui/material";
import theme from "@/themes/theme";

export default function Home({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
