import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme, Theme } from '@mui/material';
import { ReactNode } from 'react';
import { useDrawerContext } from '../contexts';
interface ILayoutBasePaginaProps {
    titulo: string;
    children: ReactNode;
    barraFerramentas?: ReactNode;
}
export const LayoutBaseDePagina: React.FC<ILayoutBasePaginaProps> = ({ titulo, children, barraFerramentas }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();

    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height='100vh' display='flex' flexDirection='column' gap={1}>
            <Box
                padding={1}
                display='flex'
                alignItems='center'
                gap={1}
                height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
            >
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                <Typography
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                    whiteSpace='nowrap' /*o texto não quebra se tiver muitas linhas */
                    overflow='hidden'
                    textOverflow='ellipsis' /* aparece 3 pontinhos caso o texto for muito extenso */
                >
                    {titulo}
                </Typography>
            </Box>
            {barraFerramentas && <Box>{barraFerramentas}</Box>}
            <Box flex={1} overflow='auto' /*dá um scroll nessa área quando tiver muito conteudo */>
                {children}
            </Box>
        </Box>
    );
};
