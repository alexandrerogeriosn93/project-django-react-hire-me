"use client";

import { ThemeProvider } from "@mui/material";
import theme from "@/themes/theme";
import { List } from "@/components/List/List";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <List></List>
      {children}
    </ThemeProvider>
  );
}
