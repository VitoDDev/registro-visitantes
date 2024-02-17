import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TelaVisitante from "../pages/TelaVisitante";
import TelaLogin from "../pages/TelaLogin";
import Dashboard from "../pages/Dashboard";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import TelaLayout from "../Layouts/TelaLayout";

const ProtectedRoute = ({ children }) => {
    const { isLogged } = useContext(AuthContext);
    return isLogged ? children : <Navigate to={"/login"} />
}

const Ways = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<TelaLayout />}>
                    <Route index element={<TelaVisitante />} />
                    <Route path={"/login"} element={<TelaLogin />} />
                    <Route path={"/dashboard"} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default Ways;