import { useContext, useDebugValue } from "react";
import AppContext from "./AppProvider.js";

const useAuth = () => {
    const { auth } = useContext(AppContext);
    useDebugValue(auth, auth => auth?.username ? "Logged In" : "Logged Out")
    return useContext(AppContext);
}

export default useAuth;