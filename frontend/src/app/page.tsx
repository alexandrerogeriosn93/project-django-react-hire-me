"use client";

import { ThemeProvider } from "@mui/material";
import theme from "@/themes/theme";
import { List } from "@/components/List/List";
import { Professional } from "@/entities/professional";
import { useIndex } from "@/hooks/pages/useIndex";

export default function Home({ children }: { children: React.ReactNode }) {
  const { listProfessionals } = useIndex();

  return (
    <ThemeProvider theme={theme}>
      <List professionals={listProfessionals}></List>
      {children}
    </ThemeProvider>
  );
}
