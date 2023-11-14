import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(Cookies.get("token") || null);
    
    const save = async (token,user) => {
        await Cookies.set("token", token);
        setUser(user);
        setToken(token);
    };
    
    const logout = async() => {
        await Cookies.remove("token");
        setUser(null);
        setToken(null);
    };

    const checkAuth = async () => {
        try {
            const res = await axios.get(`${process.env.VITE_API_URL}/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUser(res.data);
        } catch (error) {
            setError(error.response.data);
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        if (token) {
            checkAuth();
        }
    }, [token]);
    
    return (
        <authContext.Provider value={{ user, error, save, logout,token }}>
            {children}
        </authContext.Provider>
    );
    }

const useAuth = () => {
    return useContext(authContext);
}

export { useAuth, AuthProvider };