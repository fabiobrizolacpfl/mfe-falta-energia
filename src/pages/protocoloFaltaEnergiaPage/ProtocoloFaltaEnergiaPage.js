import Box from "@mui/material/Box";
import {
    Grid,
    Typography
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import StepHeaderCardComponent from "../../components/stepHeaderCardComponent/stepHeaderCardComponent";
import CustomButton from "../../components/customButton/CustomButton";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CardProtocolo from "./components/CardProtocolo";




function ProtocoloFaltaEnergiaPage({ steps, currentStep, prevStep }) {

    const [protocolo, setProtocolo] = useState("123456");//mockando o protocolo

    const dataHoraPrevisaoProtocolo = new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    }); //mochando data do protocolo ja gerado 





    return (
        <>
            <Box className="falta-energia-container">
                <Box className="header-title">
                    FALTA DE ENERGIA - PROTOCOLO
                </Box>
                <StepHeaderCardComponent
                    steps={steps}
                    currentStep={currentStep}
                />
                <StepHeaderCardComponent
                    steps={steps}
                    currentStep={currentStep}
                />
                {protocolo ? (
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <Box fontWeight="bold" className="title-protocolo">
                                    Sua região está passando por Falta de Energia já identificada!
                                </Box>
                                <Box className="container-image-protocolo" sx={{ backgroundImage: "url(/images/falta-energia-protocol-identificada.png)", }}>
                                </Box>
                                <Box className="text-protocolo" textAlign={"center"} marginTop={4}>
                                    Não se preocupe! Nossas equipes estão trabalhando para<br></br>
                                    resolver o problema o mais rápido possível.
                                </Box>
                                <Box className="text-protocolo" marginTop={3}>
                                    Sua previsão de retorno de energia é:
                                </Box>
                                <Box className="text-protocolo" textAlign="center" marginTop={2}>
                                    <Typography color="#0098d1">
                                        {dataHoraPrevisaoProtocolo}
                                    </Typography>
                                </Box>

                                <CardProtocolo protocolo={protocolo}>

                                </CardProtocolo>
                            </Grid>
                        </Grid>
                    </Box>
                ) : (
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <Box fontWeight="bold" className="title-protocolo">
                                    Nossa equipe será acionada para resolver o problema o mais rápido possível!
                                </Box>
                                <Box className="container-image-protocolo" sx={{ backgroundImage: "url(/images/falta-energia-protocol-sucesso.png)", }}>
                                </Box>
                                <Box className="text-protocolo" marginTop={4}>
                                    Nossa equipe percorrerá a região para restabelecer a energia o mais rápido possível!
                                </Box>
                                <Box className="text-protocolo" marginTop={3}>
                                    Assim que solucionado o problema estaremos restabelecendo a energia no local.
                                </Box>
                                <CardProtocolo protocolo={protocolo}>

                                </CardProtocolo>
                            </Grid>
                        </Grid>
                    </Box>
                )}
                <Box className="footer-form">
                    <CustomButton
                        label="Voltar"
                        startIcon={<KeyboardBackspaceIcon />}
                        onClick={prevStep}
                    />
                </Box>
            </Box>

        </>
    );
}

export default ProtocoloFaltaEnergiaPage;
