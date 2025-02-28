import CustomButton from "../../../components/customButton/CustomButton";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import {useState} from "react";
import InfoModal from "../../../components/infoModal/InfoModal";

const PesquisaInstalacaoByCodInstalacao = ({setIstalacoes}) => {

    const [openModal, setOpenModal] = useState(false);
    const [codInstalacao, setCodInstalacao] = useState(null);

    const handleChangeCodInstalacao = (event) => {
        setCodInstalacao(event.target.value);
    };

    const fetchInstalacoes = () => {
        setIstalacoes([]);
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const modalContent = (
            <Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <h4>NOVA CONTA</h4>
                    <img
                        src="/images/modal-codigo-instalacao-top.png"/>
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
                <a href="#" onClick={handleOpenModal}>Onde encontro meu código?</a>
            </Box>
            <TextField
                sx={{mt: 1, mb: 2}}
                type="number"
                value={codInstalacao}
                onChange={handleChangeCodInstalacao}
                fullWidth
            />

            <Box display="flex" justifyContent="end">
                <CustomButton label="Buscar" disabled={!codInstalacao}/>
            </Box>

            <InfoModal open={openModal} onClose={handleCloseModal} content={modalContent} title="Onde encontro meu código da instalação?"/>

        </Box>
    );
};

export default PesquisaInstalacaoByCodInstalacao;