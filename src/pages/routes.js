import Home from "./Home";
import Fletes from "./Fletes";
import FleteDetails from "./FleteDetails";

export const routes = [
    { path:'/', element:<Home/> },
    { path:'/fletes', element:<Fletes/> },
    { path:'/fletes/:id', element:<FleteDetails/> },
]