import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './Registration/UseContext/DataContext'
import { Provider } from 'react-redux'
import { store } from './Redux/store.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <DataProvider>
    <App />
    </DataProvider>
    </Provider>
  

  </StrictMode>,
)
