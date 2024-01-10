import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { UseAppThemeContext } from "../shared/contexts/themeContext";

export const AppRoutes = () => {

    const { toggleTheme } = UseAppThemeContext()
    return (
        <Routes>
            <Route path="/pagina-inicial"
                element={
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={toggleTheme}>
                        Toggle Theme
                    </Button>}></Route>
            <Route path="*" element={<Navigate to="/pagina-inicial" />}></Route>

        </Routes>
    );
}