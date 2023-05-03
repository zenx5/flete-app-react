import Home from "./Home";
import Fletes from "./Fletes";
import FleteDetails from "./FleteDetails";
import Login from "./Login";

export const routes = [
    { path:'/', element:<Home/> },
    { path:'/fletes', element:<Fletes/> },
    { path:'/fletes/:id', element:<FleteDetails/> },
    { path:'/login', element:<Login/> },
]