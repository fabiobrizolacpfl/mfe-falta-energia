import Box from "@mui/material/Box";
import {useState} from "react";
import { Typography } from "@mui/material";
import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField} from "@mui/material";
import StepHeaderCardComponent from "../../components/stepHeaderCardComponent/stepHeaderCardComponent";
import CardMeuImovel from "./components/CardMeuImovel";
import CardVizinho from "./components/CardVizinho";
import CardPoste from "./components/CardPoste";


function RelatarFaltaEnergiaPage({steps, currentStep, nextStep, prevStep}) {
        const [instalacoes, setInstalacoes] = useState([]);
        const [radioValue, setRadioValue] = useState('meuimovel');
        const [openModal, setOpenModal] = useState(false);

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
        </Box>
        
    );
}

export default RelatarFaltaEnergiaPage;
