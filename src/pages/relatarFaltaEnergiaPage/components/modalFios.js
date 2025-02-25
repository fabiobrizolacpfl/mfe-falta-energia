import { Typography, FormControlLabel, Checkbox, Box, Grid, FormControl } from "@mui/material";
import CustomButton from "../../../components/customButton/CustomButton";
import InfoModal from "../../../components/infoModal/InfoModal";
import { useEffect } from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";


function ModalFios({ open, setOpenModal, isCheckedFios, setIsCheckedFios }) {

    const handleCloseModal = () => {
        if (isCheckedFios) {
            setOpenModal(false);
        }
    };

    useEffect(() => {
        if (open) {
            setIsCheckedFios(false);
        }
    }, [open, setIsCheckedFios]);


    const modalContent = (
        <Box>
            <Typography sx={{ mt: 4 }} className="blue-text" fontWeight="bold">
                Verifiquei meu disjuntor e a luz não retornou, voltou parcialmente ou temporariamente!
            </Typography>
            <Typography sx={{ mt: 2 }} className="blue-text" fontWeight="bold">
                1. Pode ser que os fios estejam partidos!
            </Typography>
            <Typography sx={{ mt: 2, fontSize: "0.850rem" }}>
                Se você visualizar algum fio partido ou desconectado do seu postinho até a conexão do seu imóvel, então, o reparo deve ser<br></br> realizado por um eletricista particular.
            </Typography>
            <Typography sx={{ mt: 2, fontSize: "0.850rem" }}>
                Mas se este fio partido ou desconectado estiver na rua em via pública, não se preocupe, pois o reparo será realizado pela nossa<br></br> equipe.
            </Typography>
            <Typography sx={{ mt: 2, fontSize: "0.850rem" }}>
                Se estes fios estiverem em contato com o solo, cercas, muros ou veículos, pedimos que não se aproxime e não saia do veículo.<br></br> Orientamos manter a distância até reparo total.
            </Typography>
            <Typography sx={{ mt: 2, fontSize: "0.850rem" }} fontWeight="bold">
                Se o problema de fio partido for do postinho para o interior da residência, por favor contate seu eletricista particular<br></br> de confiança!
            </Typography>
            <Typography sx={{ mt: 2, fontSize: "0.850rem" }} className="light-blue-text" fontWeight="bold">
                Quando posso relatar falta de energia para CPFL ?
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box>
                            <img src="/images/modal-steps-fio-partido-img-01_new1.svg" width={400} alt="Disjuntor" />
                            <Typography sx={{ mt: 2, fontSize: "0.850rem" }}>
                                Caso o rompimento estiver neste ponto do postinho para o<br></br> interior da residência,
                                <b className="light-blue-text" >recomendamos entrar em contato com<br></br> seu eletricista particular.</b>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <img src="/images/modal-steps-fio-partido-img-02_new1.svg" width={400} alt="Disjuntor" />
                            <Typography sx={{ mt: 2, fontSize: "0.850rem" }}>
                                Caso o rompimento estiver neste ponto do poste para o<br></br> postinho da residência, por favor,
                                <b className="light-blue-text">mantenha distância dos fios e<br></br> contate-nos.</b>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box
                className="falta-energia-container-warning"
                sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, width: 825 }}
            >
                <FormControl component="fieldset" className="radio-container">
                    <Box className="radio-container-filho" sx={{ display: 'flex', alignItems: 'center' }}>
                        <WarningAmberIcon sx={{ width: 40, height: 50, marginRight: 2 }} />
                        <Typography sx={{ fontSize: "0.850rem" }}>
                            ATENÇÃO: Tome cuidado ao manusear o disjuntor, se notar alguma anormalidade chame um profissional de sua confiança para realizar o procedimento!
                        </Typography>
                    </Box>
                </FormControl>
            </Box>
            <Typography sx={{ mt: 2, fontSize: "0.850rem" }}>
                <FormControlLabel
                    required
                    control={
                        <Checkbox
                            checked={isCheckedFios}
                            onChange={(e) => setIsCheckedFios(e.target.checked)}
                        />
                    }
                    label="Declaro que estou ciente das informações acima"
                />
            </Typography>

            <Box sx={{ mt: 9, display: "flex", justifyContent: "space-evenly" }}>
                <CustomButton label="Avançar" onClick={handleCloseModal} disabled={!isCheckedFios} />
            </Box>
        </Box>
    );

    return (
        <InfoModal width={600} height={550} open={open} hideCloseButton={true} onClose={handleCloseModal} content={modalContent} />
    );
}

export default ModalFios;
