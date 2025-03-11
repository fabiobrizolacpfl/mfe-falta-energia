import './FaltaEnergiaPage.css';
import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import IntroFaltaEnergiaPage from "./steps/introFaltaEnergiaPage/IntroFaltaEnergiaPage";
import BuscaInstalacaoPage from "./steps/buscaInstalacaoPage/BuscaInstalacaoPage";
import RelatarFaltaEnergiaPage from './steps/relatarFaltaEnergiaPage/RelatarFaltaEnergiaPage';
import ProtocoloPage from './steps/protocoloFaltaEnergiaPage/ProtocoloPage';

const steps = [
    { label: 'Informação Falta de Energia' },
    { label: 'Selecione uma instalação' },
    { label: 'Formulário de falta de energia' },
    { label: 'Protocolo' },
];

function FaltaEnergiaPage() {

    //const dontShowAgainPageIntro = JSON.parse(localStorage.getItem('dontShowAgainPageIntro')) ?? false;

    //const [currentStep, setCurrentStep] = useState(dontShowAgainPageIntro ? 1 : 0);
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

    const stepComponents = [
        <IntroFaltaEnergiaPage steps={steps} currentStep={currentStep} nextStep={nextStep} />,
        <BuscaInstalacaoPage steps={steps} currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} />,
        <RelatarFaltaEnergiaPage steps={steps} currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} />,
        <ProtocoloPage steps={steps} currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} />
    ];

    return (
        <Box>
            {stepComponents[currentStep]}
        </Box>
    )
}

export default FaltaEnergiaPage;
