import Box from "@mui/material/Box";
import CustomButton from "../customButton/CustomButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import * as React from "react";

const FooterButton = ({onClickPrev, disabledPrev = false, onClickNext, disabledNext = false}) => {

    return (
        <Box className="footer-form">
            <CustomButton
                label="Voltar"
                startIcon={<KeyboardBackspaceIcon/>}
                onClick={onClickPrev}
                disabled={disabledPrev}
            />
            <CustomButton
                label="Avançar"
                disabled={disabledNext}
                endIcon={<EastIcon/>}
                onClick={onClickNext}
            />
        </Box>
    );
}

export default FooterButton;