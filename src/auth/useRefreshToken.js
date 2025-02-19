import axios from '../app/api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    return async () => {
        const response = await axios.get("/backend/refresh", {
            withCredentials: true
        });
        setAuth(prev => {
            return {...prev, accessToken: response.data.accessToken}
        });
        return response.data.accessToken;
    };
};

export default useRefreshToken;