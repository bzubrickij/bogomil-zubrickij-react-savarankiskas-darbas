import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import theme from './styles/custom-themes/theme-custom';

// import myThemeCustomColors from './Styles/custom-themes/theme-custom-colors';

ReactDOM.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
