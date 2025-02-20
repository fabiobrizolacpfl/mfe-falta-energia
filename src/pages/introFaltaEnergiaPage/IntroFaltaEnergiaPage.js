import Box from "@mui/material/Box";
import {Checkbox, FormControlLabel, Grid} from "@mui/material";
import CustomButton from "../../components/customButton/CustomButton";
import * as React from "react";
import {useState} from "react";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import StepHeaderCardComponent from "../../components/stepHeaderCardComponent/stepHeaderCardComponent";

function IntroFaltaEnergiaPage({steps, currentStep, nextStep, prevStep}) {

    const [checked, setChecked] = useState(() => {
        const storedValue = localStorage.getItem('checkboxStatePageIntro');
        return storedValue ? JSON.parse(storedValue) : false;
    });

    const handleChangeCheckBoxPageIntro = (event) => {
        const newChecked = event.target.checked;
        setChecked(newChecked);
        localStorage.setItem('checkboxStatePageIntro', JSON.stringify(newChecked));
    };

    return (
        <>
            <Box className="falta-energia-container">
                <Box className="header-title">
                    FALTA DE ENERGIA - VAMOS COMEÇAR!
                </Box>
                <StepHeaderCardComponent
                    steps={steps}
                    currentStep={currentStep}
                />
                <Box>
                    <Grid container spacing={2}>
                        <Grid item md={8}>
                            <Box className="intro-text">
                                <h2>Nos informe se você está com falta de energia</h2>
                                <p>Acabou a luz? Informe falta de energia pelo site ou envie um SMS com o SEU CÓDIGO
                                    para o número
                                    da empresa que atende sua região.</p>
                                <p>Veja abaixo o número de SMS da empresa que atende sua região!</p>

                            </Box>
                            <Box className="falta-energia-container sms-info">
                                <div>
                                    <p>CPFL Paulista - SMS: 27351</p>
                                    <p>CPFL Piratininga - SMS: 27304</p>
                                    <p>CPFL Santa Cruz - SMS: 26805</p>
                                    <p>RGE - SMS: 27350</p>
                                </div>
                                <div>
                                    <p className="text-send-sms-blue">Envie um SMS com o seu código de instalação ou CPF para o número da sua distribuidora.</p>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item md={4}>
                            <Box className="card-box-informar">
                                <div>Estou sem energia!</div>
                                <div>INFORME A FALTA DE ENERGIA POR AQUI!</div>
                                <CustomButton
                                    label="Informar"
                                    startIcon={<OfflineBoltIcon/>}
                                    onClick={nextStep}
                                    variant="primary"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="footer-form">
                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={handleChangeCheckBoxPageIntro} />}
                        label="Não mostrar mais esta página nas próximas vezes"
                    />
                    <CustomButton label="Informar falta de energia" onClick={nextStep}/>
                </Box>
            </Box>
            <Box className="falta-energia-container">
                <Box className="header-title">
                    NÃO ERA O QUE ESTAVA PROCURANDO?
                </Box>
                <Box className="box-with-icon">
                    <div className="icon-box-light-bulb">
                        <LightbulbOutlinedIcon sx={{fontSize: "50px"}}/>
                    </div>
                    <div>
                        <div className="title">Lâmpadas de poste queimadas</div>
                        <p className="sub-title">Verificou alguma região pública sem energia ou um poste com luz queimada?</p>
                        <div className="nos-avise">
                            Nos avise!
                            <ArrowCircleRightIcon sx={{width: "15px", marginLeft: "5px"}}/>
                        </div>
                    </div>
                </Box>
            </Box>
        </>
    );
}

export default IntroFaltaEnergiaPage;
