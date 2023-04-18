/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/", ...rest }) => {
    if (!localStorage.access_token) {
        return <Navigate to={redirectPath} replace={true} />;
    }
    return <Outlet />;
};

export default ProtectedRoute;