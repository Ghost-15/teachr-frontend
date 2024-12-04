import {Navigate, Outlet, useLocation} from "react-router-dom";
import useAuth from "./useAuth";

const RequireToken = () => {
    const { auth } = useAuth();
    const location = useLocation();
    return (
        auth?.accessToken
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default RequireToken;