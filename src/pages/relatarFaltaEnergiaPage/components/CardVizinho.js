import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Checkbox
} from "@mui/material";
import { useState } from "react";
import CustomTextField from "../../../components/customTextField/CustomTextField";
import SeletorProblema from "./SeletorProblema";

const CardVizinho = ({ quadRadioValue, setQuadRadioValue }) => {
    const [radioValue, setRadioValue] = useState("");

    const handleChangeRadio = (event) => {
        setRadioValue(event.target.value);
        setQuadRadioValue("");
    };

    const handleChangeQuadRadio = (event) => {
        setQuadRadioValue(event.target.value);
    };


    const renderThirdContent = (radioValue) => {
        if (["total", "parcial"].includes(radioValue)) {
            return (
                <Grid container spacing={5}>
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
                </Grid>
            );
        }
        return null;
    };



    const renderQuadContent = (quadValue) => {
        if (quadValue === "nao") {
            return (
                <Grid container spacing={5}>
                    <Grid item md={5}>
                        <FormControl component="fieldset" className="radio-container">
                            <Box className="falta-energia-cardMeuImovel">
                                <Box className="radio-container-filho-vertical">
                                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                        Observação
                                    </Typography>
                                    <CustomTextField placeholder="Insira informações relevantes" multiline={true}>
                                    </CustomTextField>
                                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                        Ponto de referência próximo ao local <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <CustomTextField placeholder="Ex: Próximo a rodoviária" multiline={true}>
                                    </CustomTextField>
                                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                        Solicitante
                                    </Typography>
                                    <Box className="form-container-filho">
                                        <Box className="input-container" sx={{ width: "70%" }}>
                                            <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                                Nome completo <span style={{ color: "red" }}>*</span>
                                            </Typography>
                                            <CustomTextField multiline={true} />
                                            <Typography>
                                            </Typography>
                                        </Box>
                                        <Box className="input-container" sx={{ width: "25%" }}>
                                            <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                                Celular <span style={{ color: "red" }}>*</span>
                                            </Typography>
                                            <CustomTextField type="tel" placeholder="(__) _____-____" multiline={true} />
                                            <Typography color="textDisabled" sx={{ fontSize: "0.7rem" }}>
                                                Preencher corretamente para<br></br> entrarmos em contato se necessário.
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                        E-mail
                                    </Typography>
                                    <CustomTextField type="email" multiline={true}>
                                    </CustomTextField>
                                    <Typography sx={{ mt: 2, fontSize: "0.850rem" }}>
                                        <FormControlLabel
                                            required
                                            control={
                                                <Checkbox
                                                // checked={isCheckedFios}
                                                // onChange={(e) => setIsCheckedFios(e.target.checked)}
                                                />
                                            }
                                            label="Desejo receber informações sobre falta de energia."
                                        />
                                    </Typography>
                                </Box>
                            </Box>
                        </FormControl>
                    </Grid>
                </Grid>

            );
        }
        else if (quadValue === "sim") {
            return (
                <Grid container spacing={5}>
                    <Grid item md={5}>
                        <FormControl component="fieldset" className="radio-container">
                            <Box className="falta-energia-cardMeuImovel">
                                <Box className="radio-container-filho-vertical">
                                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                        Selecione o motivo que foi presenciado:
                                    </Typography>
                                    <SeletorProblema />
                                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                        Observação
                                    </Typography>
                                    <CustomTextField placeholder="Insira informações relevantes" multiline={true}>
                                    </CustomTextField>
                                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                        Ponto de referência próximo ao local <span style={{ color: "red" }}>*</span>
                                    </Typography>
                                    <CustomTextField placeholder="Ex: Próximo a rodoviária" multiline={true}>
                                    </CustomTextField>
                                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                        Solicitante
                                    </Typography>
                                    <Box className="form-container-filho">
                                        <Box className="input-container" sx={{ width: "70%" }}>
                                            <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                                Nome completo <span style={{ color: "red" }}>*</span>
                                            </Typography>
                                            <CustomTextField multiline={true} />
                                            <Typography>
                                            </Typography>
                                        </Box>
                                        <Box className="input-container" sx={{ width: "25%" }}>
                                            <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                                Celular <span style={{ color: "red" }}>*</span>
                                            </Typography>
                                            <CustomTextField type="tel" placeholder="(__) _____-____" multiline={true} />
                                            <Typography color="textDisabled" sx={{ fontSize: "0.7rem" }}>
                                                Preencher corretamente para<br></br> entrarmos em contato se necessário.
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }} fontWeight="bold">
                                        E-mail
                                    </Typography>
                                    <CustomTextField type="email" multiline={true}>
                                    </CustomTextField>
                                    <Typography sx={{ mt: 2, fontSize: "0.850rem" }}>
                                        <FormControlLabel
                                            required
                                            control={
                                                <Checkbox
                                                // checked={isCheckedFios}
                                                // onChange={(e) => setIsCheckedFios(e.target.checked)}
                                                />
                                            }
                                            label="Desejo receber informações sobre falta de energia."
                                        />
                                    </Typography>
                                </Box>
                            </Box>
                        </FormControl>
                    </Grid>
                </Grid>
            );
        }
    };

    return (

        <Box>
            <Grid container spacing={5}>
                <Grid item md={5}>
                    <Box className="falta-energia-cardMeuImovel">
                        <FormControl component="fieldset" className="radio-container">
                            <Box className="radio-container-filho">
                                <Typography >
                                    Trata-se de falta de energia total ou parcial?
                                </Typography>
                                <RadioGroup row value={radioValue} onChange={handleChangeRadio}>
                                    <FormControlLabel value="total" control={<Radio />} label="Total" />
                                    <FormControlLabel value="parcial" control={<Radio />} label="Parcial (oscilando ou Fraca)" />
                                </RadioGroup>
                            </Box>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            {renderThirdContent(radioValue)}
            {renderQuadContent(quadRadioValue)}
        </Box>
    );
}

export default CardVizinho;
