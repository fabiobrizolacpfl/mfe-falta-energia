import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material";
import StepHeaderCardComponent from "../../components/stepHeaderCardComponent/stepHeaderCardComponent";
import CardMeuImovel from "./components/CardMeuImovel";
import CardVizinho from "./components/CardVizinho";
import CardPoste from "./components/CardPoste";
import ModalSteps from "./components/modalSteps";
import CustomButton from "../../components/customButton/CustomButton";
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';






function RelatarFaltaEnergiaPage({ steps, currentStep, nextStep, prevStep }) {
    const [instalacoes, setInstalacoes] = useState([]);
    const [radioValue, setRadioValue] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [subRadioValue, setSubRadioValue] = useState(""); 



    const handleChangeRadio = (event) => {
        setRadioValue(event.target.value);
        setSubRadioValue(""); 
    };

    const handleChangeSubRadio = (event) => {
        setSubRadioValue(event.target.value);
    };

    const isAvancarDisabled = radioValue !== "poste" && subRadioValue !== "nao"; 


    const renderContent = (value) => {
        switch (value) {
            case 'meuimovel':
                return <CardMeuImovel setOpenModal={setOpenModal} setSubRadioValue={setSubRadioValue} />
            case 'vizinhos':
                return <CardVizinho setIstalacoes={setInstalacoes} />;
            case 'poste':
                return <CardPoste setIstalacoes={setInstalacoes} />;
            default:
                return null;
        }
    };

    useEffect(() => {
        if (radioValue === "meuimovel" && !isChecked) {
            setOpenModal(true);
        }
    }, [radioValue, isChecked]);

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
            <Box sx={{ mt: 3 }}>
                <Grid container spacing={5}>
                    <Grid item md={5}>
                        <Box className="falta-energia-container-relatar">
                            <FormControl>
                                <Typography>
                                    Onde está faltando luz?
                                </Typography>
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
            <ModalSteps
                open={openModal}
                setOpenModal={setOpenModal}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />

            <Box className="footer-form">
                <CustomButton
                    label="Voltar"
                    startIcon={<KeyboardBackspaceIcon />}
                    onClick={prevStep}
                />

                <CustomButton
                    label="Avançar"
                    endIcon={<EastIcon />}
                    disabled={isAvancarDisabled}
                    onClick={nextStep}
                />

            </Box>

        </Box>
    );
}

export default RelatarFaltaEnergiaPage;
