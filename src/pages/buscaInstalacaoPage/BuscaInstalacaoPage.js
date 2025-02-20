import Box from "@mui/material/Box";
import * as React from "react";
import {useState} from "react";
import StepHeaderCardComponent from "../../components/stepHeaderCardComponent/stepHeaderCardComponent";
import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField} from "@mui/material";
import CustomButton from "../../components/customButton/CustomButton";
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PesquisaInstalacaoByEndereco from "./components/PesquisaInstalacaoByEndereco";
import PesquisaInstalacaoByCodInstalacao from "./components/PesquisaInstalacaoByCodInstalacao";
import PesquisaInstalacaoByNrMedidor from "./components/PesquisaInstalacaoByNrMedidor";
import ListaInstalacoes from "./components/ListaInstalacoes";

function BuscaInstalacaoPage({steps, currentStep, nextStep, prevStep}) {

    const [instalacoes, setInstalacoes] = useState([]);

    const [radioValue, setRadioValue] = useState('instalacao');

    const handleChangeRadio = (event) => {
        setRadioValue(event.target.value);
    };

    const renderContent = (value) => {
        switch (value) {
            case 'instalacao':
                return <PesquisaInstalacaoByCodInstalacao setIstalacoes={setInstalacoes}/>;
            case 'endereco':
                return <PesquisaInstalacaoByEndereco setIstalacoes={setInstalacoes}/>;
            case 'medidor':
                return <PesquisaInstalacaoByNrMedidor setInstalacoes={setInstalacoes}/>;
            default:
                return null;
        }
    };

    return (
        <Box className="falta-energia-container">
            <Box className="header-title">
                FALTA DE ENERGIA - INFORMAR ENDEREÇO!
            </Box>
            <StepHeaderCardComponent
                steps={steps}
                currentStep={currentStep}
            />
            <Box className="intro-text">
                <h2>Vamos selecionar a sua instalação</h2>
                <span>Para encontrar o seu imóvel você pode utilizar o seu código de instalação, o endereço do local ou o número do medidor instalado.</span>
            </Box>
            <Box sx={{mt: 3}}>
                <Grid container spacing={5}>
                    <Grid item md={5}>
                        <Box className="falta-energia-container">
                            <FormControl>
                                <FormLabel>Como deseja pesquisar pela instalação?</FormLabel>
                                <RadioGroup
                                    value={radioValue}
                                    onChange={handleChangeRadio}
                                >
                                    <FormControlLabel value="instalacao" control={<Radio />} label="Código da instalação" />
                                    <FormControlLabel value="endereco" control={<Radio />} label="Endereço do imóvel" />
                                    <FormControlLabel value="medidor" control={<Radio />} label="Número do medidor" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item md={7}>
                        <Box className="falta-energia-container">
                            {renderContent(radioValue)}
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <ListaInstalacoes instalacoes={instalacoes}/>

            <Box className="footer-form">
                <CustomButton
                    label="Voltar"
                    startIcon={<KeyboardBackspaceIcon/>}
                    onClick={prevStep}
                />
                <CustomButton
                    label="Avançar"
                    endIcon={<EastIcon/>}
                    onClick={nextStep}
                />
            </Box>
        </Box>
    );
}

export default BuscaInstalacaoPage;
