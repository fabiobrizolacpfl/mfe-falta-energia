import Box from "@mui/material/Box";
import * as React from "react";
import {useState} from "react";
import StepHeaderCardComponent from "../../../../components/stepHeaderCardComponent/stepHeaderCardComponent";
import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from "@mui/material";
import PesquisaInstalacaoByEndereco from "./components/PesquisaInstalacaoByEndereco";
import PesquisaInstalacaoByCodInstalacao from "./components/PesquisaInstalacaoByCodInstalacao";
import PesquisaInstalacaoByNrMedidor from "./components/PesquisaInstalacaoByNrMedidor";
import ListaInstalacoes from "./components/ListaInstalacoes/ListaInstalacoes";
import FooterButton from "../../../../components/footerButton/FooterButton";
import InfoEnderecoInstalacaoModal from "./components/InfoEnderecoInstalacaoModal";

function BuscaInstalacaoPage({steps, currentStep, nextStep, prevStep}) {

    const [instalacao, setInstalacao] = useState(null);

    const dontShowAgainPageIntro = JSON.parse(localStorage.getItem('checkboxStatePageIntro')) ?? false;

    const [currentPage, setCurrentPage] = useState(1);

    const [openModal, setOpenModal] = useState(false);

    const [instalacoes, setInstalacoes] = useState();

    const [radioValue, setRadioValue] = useState('instalacao');

    const renderContent = (value) => {
        switch (value) {
            case 'instalacao':
                return <PesquisaInstalacaoByCodInstalacao setInstalacoes={setInstalacoes}/>;
            case 'endereco':
                return <PesquisaInstalacaoByEndereco setIstalacoes={setInstalacoes} currentPage={currentPage}/>;
            case 'medidor':
                return <PesquisaInstalacaoByNrMedidor setInstalacoes={setInstalacoes}/>;
            default:
                return null;
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    function SelecaoTipoPesquisaInstalacao({ radioValue, setRadioValue }) {
        return (
            <FormControl>
                <FormLabel>Como deseja pesquisar pela instalação?</FormLabel>
                <RadioGroup value={radioValue} onChange={(e) => {setRadioValue(e.target.value); setCurrentPage(1)}}>
                    <FormControlLabel value="instalacao" control={<Radio />} label="Código da instalação" />
                    <FormControlLabel value="endereco" control={<Radio />} label="Endereço do imóvel" />
                    <FormControlLabel value="medidor" control={<Radio />} label="Número do medidor" />
                </RadioGroup>
            </FormControl>
        );
    }

    return (
        <>
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
                                <SelecaoTipoPesquisaInstalacao
                                    radioValue={radioValue}
                                    setRadioValue={setRadioValue}
                                />
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
                    instalacoes={instalacoes}
                    setInstalacao={setInstalacao}
                    instalacao={instalacao}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />

                <InfoEnderecoInstalacaoModal
                    openModal={openModal}
                    handleCloseModal={handleCloseModal}
                    instalacao={instalacao}
                    nextStep={nextStep}
                />

                <FooterButton
                    onClickPrev={prevStep}
                    disabledPrev={dontShowAgainPageIntro}
                    onClickNext={() => setOpenModal(true)}
                    disabledNext={!instalacao}
                />

            </Box>
        </>
    );
}

export default BuscaInstalacaoPage;
