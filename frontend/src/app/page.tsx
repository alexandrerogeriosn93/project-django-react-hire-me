"use client";

import {
  Button,
  Dialog,
  DialogActions,
  Grid2,
  TextField,
  ThemeProvider,
} from "@mui/material";
import theme from "@/themes/theme";
import { List } from "@/components/List/List";
import { useIndex } from "@/hooks/pages/useIndex";

export default function Home({ children }: { children: React.ReactNode }) {
  const { listProfessionals } = useIndex();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <List professionals={listProfessionals}></List>
        <Dialog
          open={true}
          fullWidth
          slotProps={{ paper: { sx: { padding: 6 } } }}
        >
          <Grid2 container spacing={2}>
            <Grid2 size={12} component={"div"}>
              <TextField label="Digite o nome" type="text" fullWidth />
            </Grid2>
            <Grid2 size={12} component={"div"}>
              <TextField label="Digite o e-mail" type="email" fullWidth />
            </Grid2>
          </Grid2>
          <DialogActions sx={{ mt: 5 }}>
            <Button>Cancelar</Button>
            <Button>Marcar trabalho</Button>
          </DialogActions>
        </Dialog>
        {children}
      </div>
    </ThemeProvider>
  );
}
