import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField} from "@mui/material";
import StepHeaderCardComponent from "../../components/stepHeaderCardComponent/stepHeaderCardComponent";
import CardMeuImovel from "./components/CardMeuImovel";
import CardVizinho from "./components/CardVizinho";
import CardPoste from "./components/CardPoste";
import CustomButton from "../../components/customButton/CustomButton";
import InfoModal from "../../components/infoModal/InfoModal";





function RelatarFaltaEnergiaPage({steps, currentStep, nextStep, prevStep}) {
        const [instalacoes, setInstalacoes] = useState([]);
        const [radioValue, setRadioValue] = useState("");
        const [openModal, setOpenModal] = useState(false);
        const [hasOpenedModal, setHasOpenedModal] = useState(false); // Estado para verificar se já abriu a modal
        const [modalStep, setModalStep] = useState(1); // Estado para controlar os passos internos da modal
        const [hideCloseButton, setHideCloseButton] = useState(true); // Defina o estado aqui

        const handleChangeRadio = (event) => {
            setRadioValue(event.target.value);
        };

        const renderContent = (value) => {
            switch (value) {
                case 'meuimovel':
                    return <CardMeuImovel setIstalacoes={setInstalacoes}/>;
                case 'vizinhos':
                    return <CardVizinho setIstalacoes={setInstalacoes}/>;
                case 'poste':
                    return <CardPoste setInstalacoes={setInstalacoes}/>;
                default:
                    return null;
            }
        };

        useEffect(() => {
            if (radioValue === "meuimovel" && !hasOpenedModal) {
                setOpenModal(true);
                setHasOpenedModal(true); // Garante que a modal só abre uma vez automaticamente
            }
        }, [radioValue, hasOpenedModal]);

        const handleNextModalStep = () => {
            if (modalStep < 2) {
                setModalStep(modalStep + 1);
            } else {
                setOpenModal(false); // Só fecha a modal quando o usuário finalizar
            }
        };

        const handlePrevModalStep = () => {
            if (modalStep > 1) {
                setModalStep(modalStep - 1);
            }
        };

        

    return (
        <Box className="falta-energia-container">
            <Box className="header-title">
            FALTA DE ENERGIA - RELATAR FALTA DE ENERGIA
            </Box>
            <StepHeaderCardComponent
                steps={steps}
                currentStep={currentStep}
            />
            <Box className="intro-text">
                <h4>Para um atendimento mais assertivo, nos ajude a identificar o problema respondendo as opções abaixo</h4>
            </Box>
            <Box sx={{mt: 3}}>
                <Grid container spacing={5}>
                    <Grid item md={5}>
                        <Box className="falta-energia-container-relatar">
                            <FormControl>
                                <FormLabel fontW>Onde está faltando luz?</FormLabel>
                                <RadioGroup
                                    value={radioValue}
                                    onChange={handleChangeRadio}
                                >
                                    <FormControlLabel value="meuimovel" control={<Radio />} label="Somente no meu imóvel" />
                                    <FormControlLabel value="vizinhos" control={<Radio />} label="Afeta meus vizinhos e também o meu imóvel" />
                                    <FormControlLabel value="poste" control={<Radio />} label="No poste de luz" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {renderContent(radioValue)}

           
            <InfoModal
                open={openModal}
                hideCloseButton={hideCloseButton} // Aqui, `true` para esconder o botão de fechar
                content={
                    <Box width={600} height={550}>
                        {modalStep === 1 && (
                            <>
                                <Typography >
                                <b className="danger-text">ATENÇÃO:</b> Tome cuidado ao manusear o disjuntor, se notar alguma<br></br> anormalidade chame um profissional de sua confiança para realizar o procedimento!
                                </Typography>
                                <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                                Siga o passo a passo para verificar se seus disjuntores estão funcionando!
                                </Typography>
                                <Typography sx={{mt: 4}} className="blue-text" fontWeight="bold"> 
                                    Passo 01:
                                </Typography>
                                <Typography sx={{mt: 2}} >
                                Identificar e verificar disjuntores externos (do padrão) e internos (da residência)
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4 }}>
                                    <img src="/images/modal-steps-img-01.png" alt="Disjuntor"/>
                                </Box>
                                <Box sx={{ mt: 9, display: "flex", justifyContent: "space-evenly" }}>
                                    <CustomButton label="Confirmar" onClick={handleNextModalStep} />
                                </Box>
                            </>
                        )}

                        {modalStep === 2 && (
                            <>
                               <Typography >
                                <b className="danger-text">ATENÇÃO:</b> Tome cuidado ao manusear o disjuntor, se notar alguma<br></br> anormalidade chame um profissional de sua confiança para realizar o procedimento!
                                </Typography>
                                <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                                Siga o passo a passo para verificar se seus disjuntores estão funcionando!
                                </Typography>
                                <Typography sx={{mt: 4}} className="blue-text" fontWeight="bold"> 
                                    Passo 02:
                                </Typography>
                                <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                                Desarmar as chaves (posição desligada) e armar novamente.
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4 }}>
                                    <img src="/images/modal-steps-img-02.png" alt="Disjuntor" />
                                </Box>
                                <Box sx={{ mt: 5, display: "flex", justifyContent: "center", gap:3 }}>
                                    <CustomButton label="Voltar" onClick={handlePrevModalStep} />
                                    <CustomButton label="Próxima" onClick={() => { handleNextModalStep(); nextStep(); }} />
                                </Box>
                            </>
                        )}
                    </Box>
                }
            />
        </Box>
        
    );
}

export default RelatarFaltaEnergiaPage;
