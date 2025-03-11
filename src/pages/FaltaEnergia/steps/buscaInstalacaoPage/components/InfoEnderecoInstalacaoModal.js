import InfoModal from "../../../../../components/infoModal/InfoModal";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import CustomButton from "../../../../../components/customButton/CustomButton";
import * as React from "react";

const InfoEnderecoInstalacaoModal = ({openModal, handleCloseModal, instalacao, nextStep}) =>{

    if(!instalacao) return null;

    const modalContentInfoIntalacao = (
        <Box width={730} height={325}>

            <Typography fontWeight="bold" variant="h6">
                O relato de falta de energia será no endereço informado abaixo:
            </Typography>

            <Typography sx={{mt: 2, fontSize: '0.875rem'}}>
                <strong>CEP:</strong> {instalacao.cep} <br/>
                <strong>Endereço:</strong> {instalacao.logradouro}, {instalacao.numeroResidencia}, {instalacao.bairro} <br/>
                <strong>Complemento:</strong> {instalacao.cidade} - {instalacao.estado} <br/>
                <strong>Cidade:</strong> {instalacao.cidade} - {instalacao.estado}
            </Typography>

            <Typography sx={{mt: 2, fontSize: '0.875rem'}}>
                <b className="danger-text">ATENÇÃO:</b> Confirme se o endereço está correto para que
                nossa equipe tenha maior precisão ao se deslocar para o local informado.
            </Typography>

            <Box sx={{mt: 9, display: "flex", justifyContent: "space-evenly"}}>
                <CustomButton label="Revisar Endereço" onClick={handleCloseModal} variant="outlined"/>
                <CustomButton label="Confirmar Endereço" onClick={() => {nextStep();handleCloseModal();
                }}/>
            </Box>

        </Box>
    )

    return (
        <InfoModal
            open={openModal}
            onClose={handleCloseModal}
            content={modalContentInfoIntalacao}
        />
    )
}

export default InfoEnderecoInstalacaoModal;