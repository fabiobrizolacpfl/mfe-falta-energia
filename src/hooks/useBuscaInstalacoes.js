import { useState } from "react";

const useBuscaInstalacoes = () => {

    const [instalacoes, setInstalacoes] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [loading, setLoading] = useState(false);

    const buscarInstalacoes = async (filtros, pagina = 1) => {
        setLoading(true);
        try {

            const resposta = await fetch(`/api/instalacoes?pagina=${pagina}&filtros=${JSON.stringify(filtros)}`);
            const dados = await resposta.json();

            setInstalacoes(dados.instalacoes);
            setPaginaAtual(pagina);
            setTotalPaginas(dados.totalPaginas);
        } catch (error) {
            console.error("Erro ao buscar instalações:", error);
        } finally {
            setLoading(false);
        }
    };

    return { instalacoes, buscarInstalacoes, paginaAtual, totalPaginas, setPaginaAtual, loading };
};

export default useBuscaInstalacoes;
