import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MenuProvider } from './assets/context/menu.context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MenuProvider>
    <App />
  </MenuProvider>
)
