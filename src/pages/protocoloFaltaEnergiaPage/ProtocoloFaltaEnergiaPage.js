import Box from "@mui/material/Box";
import {
    Grid

} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import StepHeaderCardComponent from "../../components/stepHeaderCardComponent/stepHeaderCardComponent";
import CustomButton from "../../components/customButton/CustomButton";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CardProtocolo from "./components/CardProtocolo";



function ProtocoloFaltaEnergiaPage({ steps, currentStep, prevStep }) {

    const [protocolo, setProtocolo] = useState("1234567890");



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
