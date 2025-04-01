import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard } from '../pages';

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();

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
            <Route path='/pagina-inicial' element={<Dashboard></Dashboard>} />

            <Route path='*' element={<Navigate to={'/pagina-inicial'} />} />
        </Routes>
    );
};
