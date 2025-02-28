import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import StepHeaderCardComponent from "../../components/stepHeaderCardComponent/stepHeaderCardComponent";
import CardMeuImovel from "./components/CardMeuImovel";
import CardVizinho from "./components/CardVizinho";
import ModalSteps from "./components/modalSteps";
import CustomButton from "../../components/customButton/CustomButton";
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ModalFios from "./components/modalFios";








function RelatarFaltaEnergiaPage({ steps, currentStep, nextStep, prevStep }) {
    const [instalacoes, setInstalacoes] = useState([]);
    const [radioValue, setRadioValue] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [openModalFios, setOpenModalFios] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedFios, setIsCheckedFios] = useState(false);
    const [subRadioValue, setSubRadioValue] = useState("");
    const [subQuebradoRadioValue, setSubQuebradoRadioValue] = useState("");
    const [thirdRadioValue, setThirdRadioValue] = useState("");
    const [quadRadioValue, setQuadRadioValue] = useState("");



    const handleChangeRadio = (event) => {
        setRadioValue(event.target.value);
        setSubRadioValue("");
        setSubQuebradoRadioValue("");
        setThirdRadioValue("");
        setQuadRadioValue("");
    };

    const isAvancarDisabled = !(
        radioValue === "poste" ||
        (radioValue === "meuimovel" && subRadioValue === "nao" && thirdRadioValue === "nao") ||
        (radioValue === "meuimovel" && subRadioValue === "sim") ||
        (radioValue === "meuimovel" && subQuebradoRadioValue === "nao") ||
        (radioValue === "meuimovel" && quadRadioValue === "nao") ||
        (radioValue === "meuimovel" && subQuebradoRadioValue === "sim" && quadRadioValue === "sim") ||
        (radioValue === "meuimovel" && subRadioValue === "nao" && thirdRadioValue === "sim" && quadRadioValue === "sim") ||
        (radioValue === "vizinhos" && quadRadioValue === "nao") ||
        (radioValue === "vizinhos" && quadRadioValue === "sim")

    );

    const renderContent = (value) => {
        switch (value) {
            case 'meuimovel':
                return <CardMeuImovel setOpenModalFios={setOpenModalFios} setOpenModal={setOpenModal} subQuebradoRadioValue={subQuebradoRadioValue} setSubQuebradoRadioValue={setSubQuebradoRadioValue} quadRadioValue={quadRadioValue} setQuadRadioValue={setQuadRadioValue} subRadioValue={subRadioValue} thirdRadioValue={thirdRadioValue} setSubRadioValue={setSubRadioValue} setThirdRadioValue={setThirdRadioValue} />
            case 'vizinhos':
                return <CardVizinho quadRadioValue={quadRadioValue} setQuadRadioValue={setQuadRadioValue} />;
            case 'poste':
                return
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
            <ModalFios open={openModalFios}
                setOpenModal={setOpenModalFios}
                setIsCheckedFios={setIsCheckedFios}
                isCheckedFios={isCheckedFios} />

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
