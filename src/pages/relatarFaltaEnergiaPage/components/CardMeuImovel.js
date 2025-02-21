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

const CardMeuImovel = ({ setOpenModal,  setSubRadioValue  }) => {
    const [radioValue, setRadioValue] = useState("");
    const [subRadioValue, setSubRadioValueLocal] = useState(""); 
    
    const handleChangeRadio = (event) => {
        setRadioValue(event.target.value);
        setSubRadioValueLocal(""); 
        setSubRadioValue(""); 
    };

      const handleChangeSubRadio = (event) => {
        setSubRadioValueLocal(event.target.value);
        setSubRadioValue(event.target.value);
    };

    const renderContent = (value) => {
        switch (value) {
            case "normal":
                return (
                    <box>
                        <Grid container spacing={5}>
                            <Grid item md={5}>
                                <Box className="falta-energia-container-warning">
                                    <WarningAmberIcon sx={{ width: 40, height: 50 }} />
                                    <Typography>
                                        Verifique se existem fios partidos no interior da sua
                                        residência.
                                    </Typography>
                                    <CustomButton
                                        height="50px"
                                        label="Como verificar o fio partido?"
                                        onClick={() => setOpenModal(true)}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={5}>
                            <Grid item md={5}>
                                <Box className="falta-energia-cardMeuImovel">
                                    <FormControl component="fieldset" className="radio-container">
                                        <Typography>
                                            Existe fio partido do postinho para o interior da residência?
                                        </Typography>
                                        <RadioGroup row value={subRadioValue} onChange={handleChangeSubRadio}>
                                            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                                            <FormControlLabel value="nao" control={<Radio />} label="Não" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                    </box>
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
                                <Typography>
                                Já verificou sua instalação interna com um eletricista particular?
                                </Typography>
                                <RadioGroup row value={subRadioValue} onChange={handleChangeSubRadio}>
                                    <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                                    <FormControlLabel value="nao" control={<Radio />} label="Não" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
                );
            default:
                return null;
        }
    };

    return (
        <Box>
            <Grid container spacing={5}>
                <Grid item md={5}>
                    <Box className="falta-energia-container-warning">
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
        </Box>
    );
};

export default CardMeuImovel;
