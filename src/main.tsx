import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import {
  App,
  ErrorPage,
} from 'pages';
import { DarkMode } from './utils';
import { lightTheme, darkTheme } from './utils/theme';

const Main = () => {
  const { theme, toggleTheme, componentMounted } = DarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }
  return (
      <ThemeProvider theme={themeMode}>
        <Routes>
          <Route path='/' element={<App theme={theme} toggleTheme={toggleTheme}/>} />
          <Route path='/404' element={<ErrorPage theme={theme} toggleTheme={toggleTheme}/>} />
        </Routes>
      </ThemeProvider>
  );
};

export default Main;
