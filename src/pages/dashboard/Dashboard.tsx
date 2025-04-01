import { FerramentasDaListagem, FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard = () => {
    return (
        <LayoutBaseDePagina
            titulo='Página Inicial'
            barraFerramentas={
                <FerramentasDeDetalhe
                    mostrarBotaoSalavarEFechar
                    mostrarBotaoNovo
                    mostrarBotaoNovoCarregando
                    mostrarBotaoVoltar={false}
                />
            }
        >
            Componentes
        </LayoutBaseDePagina>
    );
};
