import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

export default function RouterProvider(){

    return <BrowserRouter>
        <Routes>
            {routes.map( route => <Route key={route.path} path={route.path} element={route.element} /> )}
        </Routes>
    </BrowserRouter>
}