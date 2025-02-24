import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CustomButton from "../../../components/customButton/CustomButton";
import { Grid } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    grid,
    Radio,
    RadioGroup,
} from "@mui/material";
import { useState, useEffect } from "react";

const CardMeuImovel = ({ setOpenModal, setOpenModalFios, setSubRadioValue, setThirdRadioValue, thirdRadioValue, subRadioValue, quadRadioValue, setQuadRadioValue }) => {
    const [radioValue, setRadioValue] = useState("");

    const handleChangeRadio = (event) => {
        setRadioValue(event.target.value);
        setSubRadioValue("");
        setThirdRadioValue("");
        setQuadRadioValue("");
    };

    const handleChangeSubRadio = (event) => {
        setSubRadioValue(event.target.value);
        setThirdRadioValue("");
        setQuadRadioValue("");
    };

    const handleChangeThirdRadio = (event) => {
        setThirdRadioValue(event.target.value);
        setQuadRadioValue("");
    };

    const handleChangeQuadRadio = (event) => {
        setQuadRadioValue(event.target.value);
    };

    const renderContent = (value) => {
        switch (value) {
            case "normal":
                return (
                    <Box>
                        <Grid container spacing={5}>
                            <Grid item md={5}>
                                <Box className="falta-energia-container-warning">
                                    <FormControl component="fieldset" className="radio-container">
                                        <Box className="radio-container-filho">
                                            <WarningAmberIcon sx={{ width: 40, height: 50 }} />
                                            <Typography>
                                                Verifique se existem fios partidos no interior da sua
                                                residência.
                                            </Typography>
                                            <CustomButton
                                                height="50px"
                                                label="Como verificar o fio partido?"
                                                onClick={() => setOpenModalFios(true)}
                                            />
                                        </Box>
                                    </FormControl>

                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={5}>
                            <Grid item md={5}>
                                <Box className="falta-energia-cardMeuImovel">
                                    <FormControl component="fieldset" className="radio-container">
                                        <Box className="radio-container-filho">
                                            <Typography >
                                                Existe fio partido do postinho para o interior da residência?
                                            </Typography>
                                            <RadioGroup row value={subRadioValue} onChange={handleChangeSubRadio}>
                                                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                                                <FormControlLabel value="nao" control={<Radio />} label="Não" />
                                            </RadioGroup>
                                        </Box>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                );
            case "quebrado":
                return;
            case "naoVerificado":
                return;
            default:
                return null;
        }
    };

    const renderSubContent = (subValue) => {
        switch (subValue) {
            case "sim":
                return
            case "nao":
                return (
                    <Grid container spacing={5}>
                        <Grid item md={5}>
                            <Box className="falta-energia-cardMeuImovel">
                                <FormControl component="fieldset" className="radio-container">
                                    <Box className="radio-container-filho">
                                        <Typography>
                                            Já verificou sua instalação interna com um eletricista particular?
                                        </Typography>
                                        <RadioGroup row value={thirdRadioValue} onChange={handleChangeThirdRadio}>
                                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                                            <FormControlLabel value="nao" control={<Radio />} label="Não" />
                                        </RadioGroup>
                                    </Box>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                );
            default:
                return null;
        }
    };

    const renderThirdContent = (thirdValue) => {
        switch (thirdValue) {
            case "sim":
                return (<Grid container spacing={5}>
                    <Grid item md={5}>
                        <Box className="falta-energia-cardMeuImovel">
                            <FormControl component="fieldset" className="radio-container">
                                <Box className="radio-container-filho">
                                    <Typography>
                                        Você sabe o que provocou a falta de energia?
                                    </Typography>
                                    <RadioGroup row value={quadRadioValue} onChange={handleChangeQuadRadio}>
                                        <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                                        <FormControlLabel value="nao" control={<Radio />} label="Não" />
                                    </RadioGroup>
                                </Box>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>);
            case "nao":
                return
            default:
                return null;
        }
    };

    return (
        <Box>
            <Grid container spacing={5}>
                <Grid item md={5}>
                    <Box className="falta-energia-container-warning">
                        <FormControl component="fieldset" className="radio-container">
                            <Box className="radio-container-filho">
                                <WarningAmberIcon sx={{ width: 40, height: 50 }} />
                                <Typography>
                                    Nossa equipe não pode efetuar reparos nas Instalações internas. Se
                                    a falta<br></br> de energia está afetando apenas sua residência,
                                    verifique os disjuntores<br></br> internos ou procure um
                                    eletricista de sua preferência. Caso não seja<br></br>{" "}
                                    identificado nenhum problema, entre em contato conosco.
                                </Typography>
                                <CustomButton
                                    height="50px"
                                    label="Como verificar meu disjuntor?"
                                    onClick={() => setOpenModal(true)}
                                />
                            </Box>
                        </FormControl>

                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                <Grid item md={5}>
                    <Box className="falta-energia-container-relatar">
                        <FormControl>
                            <Typography>
                                Qual a situação dos disjuntores verificados?
                            </Typography>
                            <RadioGroup value={radioValue} onChange={handleChangeRadio}>
                                <FormControlLabel
                                    value="normal"
                                    control={<Radio />}
                                    label="Os disjuntores estão normais"
                                />
                                <FormControlLabel
                                    value="quebrado"
                                    control={<Radio />}
                                    label="Os disjuntores estão quebrados"
                                />
                                <FormControlLabel
                                    value="naoVerificado"
                                    control={<Radio />}
                                    label="Não verifiquei meus disjuntores"
                                />
                                {radioValue === "naoVerificado" && (
                                    <Typography sx={{ mt: 1 }} color="warning">
                                        ATENÇÃO: Para continuar é necessário que você verifique seu
                                        disjuntor (Veja os passos descritos acima)
                                    </Typography>
                                )}
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            {renderContent(radioValue)}
            {radioValue === "normal" && renderSubContent(subRadioValue)}
            {radioValue === "normal" && renderThirdContent(thirdRadioValue)}
        </Box>
    );
};

export default CardMeuImovel;
