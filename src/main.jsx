import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { map } from './Routes/Map.jsx'
import AuthContext from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthContext>
        <RouterProvider router={map}>
            <App/>
        </RouterProvider>
    </AuthContext>
)
