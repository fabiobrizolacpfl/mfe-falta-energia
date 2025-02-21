import { Typography, FormControlLabel, Checkbox, Box } from "@mui/material";
import CustomButton from "../../../components/customButton/CustomButton";
import InfoModal from "../../../components/infoModal/InfoModal";
import { useState, useEffect } from "react";



function ModalSteps({ open, setOpenModal, isChecked, setIsChecked }) {

    const [modalStep, setModalStep] = useState(1);

    const handleNextStep = () => {
        if (modalStep < 3) {
            setModalStep(modalStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (modalStep > 1) {
            setModalStep(modalStep - 1);
        }
    };

    const handleCloseModal = () => {
        if (isChecked) {
            setOpenModal(false);
        }
    };

    const modalContent = (
        <>
            {modalStep === 1 && (
                <>
                    <Typography>
                        <b className="danger-text">ATENÇÃO:</b> Tome cuidado ao
                        manusear o disjuntor, se notar alguma<br></br> anormalidade
                        chame um profissional de sua confiança para realizar o procedimento!
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                        Siga o passo a passo para verificar se seus disjuntores estão
                        funcionando!
                    </Typography>
                    <Typography sx={{ mt: 4 }} className="blue-text" fontWeight="bold">
                        Passo 01:
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Identificar e verificar disjuntores externos (do padrão) e internos (da residência)
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4 }}>
                        <img src="/images/modal-steps-img-01.png" alt="Disjuntor" />
                    </Box>
                    <Box sx={{ mt: 9, display: "flex", justifyContent: "space-evenly" }}>
                        <CustomButton label="Confirmar" onClick={handleNextStep} />
                    </Box>
                </>
            )}

            {modalStep === 2 && (
                <>
                    <Typography>
                        <b className="danger-text">ATENÇÃO:</b> Tome cuidado ao
                        manusear o disjuntor, se notar alguma<br></br> anormalidade
                        chame um profissional de sua confiança para realizar o procedimento!
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                        Siga o passo a passo para verificar se seus disjuntores estão
                        funcionando!
                    </Typography>
                    <Typography sx={{ mt: 4 }} className="blue-text" fontWeight="bold">
                        Passo 02:
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                        Desarmar as chaves (posição desligada) e armar novamente.
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4 }}>
                        <img src="/images/modal-steps-img-02.png" alt="Disjuntor" />
                    </Box>
                    <Box sx={{ mt: 5, display: "flex", justifyContent: "center", gap: 3 }}>
                        <CustomButton label="Voltar" onClick={handlePrevStep} />
                        <CustomButton label="Próxima" onClick={handleNextStep} />
                    </Box>
                </>
            )}

            {modalStep === 3 && (
                <>
                    <Typography>
                        <b className="danger-text">ATENÇÃO:</b> Tome cuidado ao
                        manusear o disjuntor, se notar alguma<br></br> anormalidade
                        chame um profissional de sua confiança para realizar o procedimento!
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                        Siga o passo a passo para verificar se seus disjuntores estão
                        funcionando!
                    </Typography>
                    <Typography sx={{ mt: 4 }} className="blue-text" fontWeight="bold">
                        Passo 03:
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                        Verifique se sua luz voltou.
                    </Typography>
                    <Typography sx={{ mt: 4 }} color="warning" fontWeight="bold">
                        Observações
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                        - Se as chaves ficarem soltas (sem travar), estão queimadas e será necessário
                        verificar com eletricista particular.
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                        - Energia somente em alguns cômodos pode ser problema interno.
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                        - Está utilizando equipamento que pode causar sobrecarga. (Ex.: dois chuveiros).
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                        <FormControlLabel
                            required
                            control={
                                <Checkbox
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                />
                            }
                            label="Declaro que estou ciente das informações acima"
                        />
                    </Typography>
                    <Box sx={{ mt: 5, display: "flex", justifyContent: "center", gap: 3 }}>
                        <CustomButton label="Voltar" onClick={handlePrevStep} />
                        <CustomButton label="Entendi" onClick={handleCloseModal} disabled={!isChecked} />
                    </Box>
                </>
            )}
        </>
    );

    return (
        <InfoModal width={600} height={550} open={open} hideCloseButton={true} onClose={handleCloseModal} content={modalContent} />
    );
}

export default ModalSteps;
