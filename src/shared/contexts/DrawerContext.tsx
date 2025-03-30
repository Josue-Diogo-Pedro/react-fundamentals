import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

type DrawerProps = {
    children: ReactNode;
};

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const AppDrawerProvider: React.FC<DrawerProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    return <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>{children}</DrawerContext.Provider>;
};
