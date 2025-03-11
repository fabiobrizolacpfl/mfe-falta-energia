import CustomButton from "../../../../../components/customButton/CustomButton";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import {useState} from "react";
import InfoModal from "../../../../../components/infoModal/InfoModal";
import apiManager from "../../../../../services/ApiManager"

const PesquisaInstalacaoByCodInstalacao = ({setInstalacoes}) => {

    const [openModal, setOpenModal] = useState(false);
    const [codInstalacao, setCodInstalacao] = useState(null);

    const fetchInstalacoes = async () => {
        const response = await apiManager.buscarInstalacaoPorCodigo(codInstalacao);
        setInstalacoes(response?.instalacoes || []);
    };

    const handleCloseModal = () => setOpenModal(false);

    const modalContent = (
            <Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <h4>NOVA CONTA</h4>
                    <img src="/images/modal-codigo-instalacao-top.png"/>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box>
                        <h4>ANTIGA CONTA</h4>
                    </Box>
                    <img src="/images/modal-codigo-instalacao-bottom.png"/>
                </Box>
                <Box sx={{ m: 1, display: "flex", justifyContent: "center" }}>
                <CustomButton onClick={handleCloseModal} label="Ok, entendi" />
                </Box>
            </Box>
    );

    return (
        <Box>
            <Box display="flex" justifyContent="space-between">
                <div>Insira aqui o código da instalação</div>
                <a href="#" onClick={() => setOpenModal(true)}>Onde encontro meu código?</a>
            </Box>
            <TextField
                sx={{mt: 1, mb: 2}}
                type="number"
                value={codInstalacao}
                fullWidth
                onChange={(e) => setCodInstalacao(e.target.value)}
            />

            <Box display="flex" justifyContent="end">
                <CustomButton label="Buscar" disabled={!codInstalacao} onClick={fetchInstalacoes}/>
            </Box>

            <InfoModal open={openModal} onClose={handleCloseModal} content={modalContent} title="Onde encontro meu código da instalação?"/>

        </Box>
    );
};

export default PesquisaInstalacaoByCodInstalacao;