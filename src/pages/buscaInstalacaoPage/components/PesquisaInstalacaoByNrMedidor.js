import Box from "@mui/material/Box";
import CustomButton from "../../../components/customButton/CustomButton";
import {TextField} from "@mui/material";
import {useState} from "react";
import InfoModal from "../../../components/infoModal/InfoModal";

const PesquisaInstalacaoByNrMedidor = ({setInstalacoes}) => {

    const [openModal, setOpenModal] = useState(false);
    const [numeroMedidor, setNumeroMedidor] = useState(null);

    const [imageSrc, setImageSrc] = useState('/images/modal-num-medidor-top.png');

    const handleCPFLClick = () => {
        setImageSrc('/images/modal-num-medidor-top.png');
    };

    const handleRGEClick = () => {
        setImageSrc('/images/modal-num-medidor-middle.png');
    };

    const handleChangeNumeroMedidor = (event) => {
        setNumeroMedidor(event.target.value);
    };

    const fetchInstalacoes = () => {
        setInstalacoes([]);
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const modalContent = (
        <Box>

            <Box display="flex" justifyContent="space-evenly">
                <CustomButton label="Sou cliente CPFL" onClick={handleCPFLClick}/>
                <CustomButton label="Sou cliente RGE" onClick={handleRGEClick}/>
            </Box>

            <Box mt={5} display="flex" flexDirection="column" alignItems="center">
                <img src={imageSrc}/>
            </Box>

            <Box className="separator-container">
                <hr/>
                <span>OU</span>
                <hr/>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="center">
                <Box textAlign="center">
                    <h3>Caso você não tenha acesso a conta, <br/> você pode encontrar o número direto na caixa de medição.</h3>
                </Box>
                <img src="/images/modal-num-medidor-bottom.png"/>
            </Box>

        </Box>
    );

    return (
        <Box>
            <Box display="flex" justifyContent="space-between">
                <div>Insira aqui o número do medidor</div>
                <a href="#" onClick={handleOpenModal}>Onde encontro meu nº do medidor?</a>
            </Box>
            <TextField
                sx={{mt: 1, mb: 2}}
                type="number"
                value={numeroMedidor}
                onChange={handleChangeNumeroMedidor}
                fullWidth/>

            <Box display="flex" justifyContent="end">
                <CustomButton label="Buscar" disabled={!numeroMedidor} onClick={fetchInstalacoes}/>
            </Box>

            <InfoModal open={openModal} onClose={handleCloseModal} content={modalContent} title="Onde encontro o nº do medidor?"/>

        </Box>
    );
};

export default PesquisaInstalacaoByNrMedidor;