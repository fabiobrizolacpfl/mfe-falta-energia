import './FaltaEnergiaPage.css';
import * as React from "react";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import IntroFaltaEnergiaPage from "./steps/introFaltaEnergiaPage/IntroFaltaEnergiaPage";
import BuscaInstalacaoPage from "./steps/buscaInstalacaoPage/BuscaInstalacaoPage";
import RelatarFaltaEnergiaPage from './steps/relatarFaltaEnergiaPage/RelatarFaltaEnergiaPage';
import ProtocoloPage from './steps/protocoloFaltaEnergiaPage/ProtocoloPage';
import {CircularProgress} from "@mui/material";
import Loader from "../../components/loader/Loader";
import apiManager from "../../services/ApiManager";

const steps = [
    { label: 'Informação Falta de Energia' },
    { label: 'Selecione uma instalação' },
    { label: 'Formulário de falta de energia' },
    { label: 'Protocolo' },
];

function FaltaEnergiaPage() {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        apiManager.setLoadingCallback(setIsLoading);
    }, []);

    const dontShowAgainPageIntro = JSON.parse(localStorage.getItem('dontShowAgainPageIntro')) ?? false;

    const [currentStep, setCurrentStep] = useState(dontShowAgainPageIntro ? 1 : 0);

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
            <Loader isLoading={isLoading} />
        </Box>
    )
}

export default FaltaEnergiaPage;
