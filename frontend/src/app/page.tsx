"use client";

import { ThemeProvider } from "@mui/material";
import theme from "@/themes/theme";
import { List } from "@/components/List/List";
import { Professional } from "@/entities/professional";

export default function Home({ children }: { children: React.ReactNode }) {
  const professionals: Professional[] = [
    {
      id: 1,
      name: "Alexandre",
      description: "Tecnólogo em Sistemas para Internet",
      value_per_hour: 100,
      photo: "https://github.com/alexandrerogeriosn93.png",
    },
    {
      id: 2,
      name: "Django",
      description: "Tecnologia para o desenvolvimento web",
      value_per_hour: 300,
      photo: "https://github.com/django.png",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <List></List>
      {children}
    </ThemeProvider>
  );
}
