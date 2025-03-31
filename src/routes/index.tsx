import { Routes, Route, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Página Inicial',
            },
        ]);
    }, []); // só será executado uma vez

    return (
        <Routes>
            <Route
                path='/pagina-inicial'
                element={
                    <Button variant='contained' color='primary' onClick={toggleDrawerOpen}>
                        Toggle Drawer
                    </Button>
                }
            />

            <Route path='*' element={<Navigate to={'/pagina-inicial'} />} />
        </Routes>
    );
};
