import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface IDrawerOption {
    icon: string;
    path: string;
    label: string;
}

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOption[];
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
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
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOption: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOption);
    }, []);

    return (
        <DrawerContext.Provider
            value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}
        >
            {children}
        </DrawerContext.Provider>
    );
};
