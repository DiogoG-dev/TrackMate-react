import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationContext = createContext()

export function NavigationProvider({ children }) {
    const navigate = useNavigate();

    function navigateTo(path) {
        navigate(path === 'home' ? '/' : `/${path}`);
    }
    return (
        <NavigationContext.Provider value={{ navigateTo }}>
            {children}
        </NavigationContext.Provider>
    )
}

export function useNavigation() {
    return useContext(NavigationContext);
}