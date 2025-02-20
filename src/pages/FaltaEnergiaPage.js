import './FaltaEnergiaPage.css';
import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import IntroFaltaEnergiaPage from "./introFaltaEnergiaPage/IntroFaltaEnergiaPage";
import BuscaInstalacaoPage from "./buscaInstalacaoPage/BuscaInstalacaoPage";
import RelatarFaltaEnergiaPage from './relatarFaltaEnergiaPage/RelatarFaltaEnergiaPage';

const steps = [
    { label: 'Informação Falta de Energia' },
    { label: 'Selecione uma instalação' },
    { label: 'Formulário de falta de energia' },
    { label: 'Protocolo' },
];

function FaltaEnergiaPage() {

    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

    return (
        <Box>
            {currentStep === 0 && <IntroFaltaEnergiaPage steps={steps} currentStep={currentStep} nextStep={nextStep} prevStep={prevStep}/>}
            {currentStep === 1 && <BuscaInstalacaoPage steps={steps} currentStep={currentStep} nextStep={nextStep} prevStep={prevStep}/>}
            {currentStep === 2 && <RelatarFaltaEnergiaPage steps={steps} currentStep={currentStep} nextStep={nextStep} prevStep={prevStep}/>}
        </Box>
    )
}

export default FaltaEnergiaPage;
