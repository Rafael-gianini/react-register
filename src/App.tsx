
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts/themeContext';
import { NavBar } from './shared/components/navBar/NavBar';

export const App = () => {
  return (
    <AppThemeProvider >
      <BrowserRouter>
        <NavBar>
          <AppRoutes></AppRoutes>
        </NavBar>
        
      </BrowserRouter>
    </AppThemeProvider>
  );
};


