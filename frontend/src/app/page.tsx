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
  const {
    listProfessionals,
    name,
    setName,
    email,
    setEmail,
    professionalSelected,
    setProfessionalSelected,
    registerJob,
  } = useIndex();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <List
          professionals={listProfessionals}
          onSelect={(professional) => setProfessionalSelected(professional)}
        ></List>
        <Dialog
          open={professionalSelected !== null}
          fullWidth
          slotProps={{ paper: { sx: { padding: 6 } } }}
          onClose={() => setProfessionalSelected(null)}
        >
          <Grid2 container spacing={2}>
            <Grid2 size={12} component={"div"}>
              <TextField
                label="Digite o nome"
                type="text"
                fullWidth
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Grid2>
            <Grid2 size={12} component={"div"}>
              <TextField
                label="Digite o e-mail"
                type="email"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Grid2>
          </Grid2>
          <DialogActions sx={{ mt: 5 }}>
            <Button onClick={() => setProfessionalSelected(null)}>
              Cancelar
            </Button>
            <Button onClick={() => registerJob()}>Marcar trabalho</Button>
          </DialogActions>
        </Dialog>
        {children}
      </div>
    </ThemeProvider>
  );
}
