import {
  AppBar,
  Box,
  Container,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

// Renders the initial task page shell before task management features are added.
function TaskPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Typography component="h1" variant="h6">
            Gestor de Tareas ICE
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper elevation={0} sx={{ border: 1, borderColor: 'divider', p: 3 }}>
          <Stack spacing={1}>
            <Typography component="h2" variant="h5">
              Preparado para priorizar tareas
            </Typography>
            <Typography color="text.secondary">
              La estructura base de la aplicacion esta lista para incorporar el
              modelo ICE.
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default TaskPage;
