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
import InfoModal from "../../components/infoModal/InfoModal";
import { Typography } from "@mui/material";
import { useUser } from "../../context/UserContext"; // Atualizado de useInstalacao para useUser



function BuscaInstalacaoPage({steps, currentStep, nextStep, prevStep}) {

    const { userData, setUserData } = useUser();
    const [openModal, setOpenModal] = useState(false);
    const [instalacoes, setInstalacoes] = useState([]);
    const [radioValue, setRadioValue] = useState('instalacao');
    
 
    const handleChangeRadio = (event) => {
        setRadioValue(event.target.value);
    };

    const mockInstalacoes = [
        { 
            codigo: "001", 
            nome: "Instalação 001", 
            status: "Ativa", 
            cep: "12345-678", 
            endereco: "Rua Antônio Prado, 123, Centro", 
            complemento: "Apartamento 101", 
            cidade: "Araraquara", 
            estado: "SP"
        },
    ];
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

    const handleAvancar = () => {
        if (userData.instalacaoSelecionada) {
            setOpenModal(true);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
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

            <ListaInstalacoes 
                instalacoes={mockInstalacoes}
                selectedInstalacao={userData.instalacaoSelecionada} 
                onSelectInstalacao={(selectedInstalacao) => setUserData({ ...userData, instalacaoSelecionada: selectedInstalacao })}
            />

             <Box className="footer-form">
                <CustomButton
                    label="Voltar"
                    startIcon={<KeyboardBackspaceIcon />}
                    onClick={prevStep}
                />

            <CustomButton label="Avançar"  disabled={!userData.instalacaoSelecionada} endIcon={<EastIcon />} onClick={handleAvancar} />
            </Box>

            {userData.instalacaoSelecionada && (
                <InfoModal 
                    open={openModal}
                    onClose={handleCloseModal}
                    content={
                        <Box width={730} height={325}>
                            <Typography fontWeight="bold" variant="h6">O relato de falta de energia será no endereço informado abaixo:
                            </Typography>
                            <Typography sx={{ mt: 2, fontSize: '0.875rem' }}>
                                <strong >CEP:</strong> {userData.instalacaoSelecionada.cep} <br />
                                <strong>Endereço:</strong> {userData.instalacaoSelecionada.endereco} <br />
                                <strong>Complemento:</strong> {userData.instalacaoSelecionada.complemento} <br />
                                <strong>Cidade:</strong> {userData.instalacaoSelecionada.cidade} - {userData.instalacaoSelecionada.estado}
                            </Typography>
                            <Typography sx={{ mt: 2,fontSize: '0.875rem'  }}>
                                <b className="danger-text">ATENÇÃO:</b> Confirme se o endereço está correto para que nossa equipe tenha maior precisão ao se deslocar para o local informado.
                            </Typography>
                            <Box sx={{ mt: 9, display: "flex", justifyContent: "space-evenly" }}>
                                <CustomButton  label="Revisar Endereço" onClick={handleCloseModal} variant="outlined" />
                                <CustomButton label="Confirmar Endereço" onClick={() => { nextStep(); handleCloseModal(); }} />
                            </Box>
                        </Box>
                    }
                />
            )}
        </Box>
    );

    
}

export default BuscaInstalacaoPage;
