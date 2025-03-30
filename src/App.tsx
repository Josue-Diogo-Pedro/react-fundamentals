import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { ThemeProvider } from '@emotion/react';
import { LightTheme } from './shared/themes';
import { MenuLateral } from './shared/components/meun-lateral/MenuLateral';
import { AppDrawerProvider } from './shared/contexts';

export const App = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <AppDrawerProvider>
                <BrowserRouter>
                    <MenuLateral>
                        <AppRoutes />
                    </MenuLateral>
                </BrowserRouter>
            </AppDrawerProvider>
        </ThemeProvider>
    );
};
