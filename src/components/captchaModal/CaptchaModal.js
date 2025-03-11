import React, {useRef, useState} from "react";
import {Typography} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import InfoModal from "../infoModal/InfoModal";
import Box from "@mui/material/Box";

const CaptchaModal = ({ show, onSuccess }) => {

    const siteKey = "6LcJDCwUAAAAAPZsx3c7deGx7REdi5U3eNERQ_0j";

    const recaptchaRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async () => {

        const recaptchaToken = recaptchaRef.current.getValue();

        if (!recaptchaToken) {
            setErrorMessage("Por favor, complete o reCAPTCHA!");
            return;
        }

        onSuccess(recaptchaToken);
    };

    const modalContent = (
        <Box textAlign="center">
            <Typography  variant="h5">
                Verifique que você não é um robô
            </Typography>
            <Typography variant="body2" color="textSecondary" m={2}>
                Por favor, complete o CAPTCHA abaixo para garantir a segurança da sua ação.
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" m={2}>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={siteKey}
                    onChange={handleSubmit}
                />
                {errorMessage &&
                    <Typography color="error">
                        {errorMessage}
                    </Typography>}
            </Box>
        </Box>

    );

    return (
        <InfoModal content={modalContent} open={show} hideCloseButton={true}/>
    );
};

export default CaptchaModal;
