import { BrowserRouter } from "react-router"
import { AppRouter } from "./AppRouter"
export const MainRoute = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}
