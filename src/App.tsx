import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './styles/app.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { Routers } from './routers';
import { theme } from './themes';
import { ModalPortal } from './tools';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<></>} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={Routers} />
          <ModalPortal />
          <Toaster />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
