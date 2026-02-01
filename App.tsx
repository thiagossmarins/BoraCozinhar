import { StatusBar } from 'react-native';

import { ThemeProvider } from '@shopify/restyle';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';


import { Routes } from '@routes';
import { theme } from '@theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider >
  );
}

export default App;
