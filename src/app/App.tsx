import { CssBaseline, ThemeProvider } from '@mui/material';
import TaskPage from '../features/tasks/components/TaskPage';
import { theme } from './theme';

// Composes the global providers and the single-page task experience.
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TaskPage />
    </ThemeProvider>
  );
}

export default App;
