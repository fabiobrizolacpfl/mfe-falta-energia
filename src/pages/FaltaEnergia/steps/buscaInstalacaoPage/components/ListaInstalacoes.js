import Box from "@mui/material/Box";
import * as React from "react";
import {
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
    Pagination
} from "@mui/material";

const ListaInstalacoes = ({instalacoes, selectedInstalacao, onSelectInstalacao}) => {

    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 5;

    const contemInstalacoes = instalacoes?.length > 0;
    const totalPages = Math.ceil(instalacoes.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const instalacoesPaginadas = instalacoes.slice(startIndex, endIndex);

    return (
        <>
            {contemInstalacoes && (
                <Box mb={1}>
                    <span>Selecione a instalação</span>
                </Box>
            )}

            <Box className="falta-energia-container">
                {contemInstalacoes ? (
                    <Box>
                        <Box display="flex" justifyContent="center" m={2}>
                            <Pagination
                                count={totalPages}
                                page={currentPage}
                                onChange={(e, page) => setCurrentPage(page)}
                                color="primary"
                            />
                        </Box>

                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={selectedInstalacao?.codigoInstalacao ?? ''}
                                onChange={(e) =>
                                    onSelectInstalacao(instalacoes.find(inst => inst.codigoInstalacao === e.target.value))
                                }
                            >
                                {instalacoesPaginadas.map((inst) => (
                                    <Box display="flex" alignItems="center" mb={2} key={inst.codigo}>
                                        <FormControlLabel
                                            value={inst.codigoInstalacao}
                                            control={<Radio/>}
                                            sx={{marginBottom: 10}}
                                            label={null}
                                        />
                                        <Card variant="outlined" className="falta-energia-card-select-instalacao">
                                            <CardContent sx={{bgcolor: "var(--light-gray-bg)"}}>
                                                <Typography variant="body2">

                                                    <Box fontWeight="bold">Nº da
                                                        Instalação: {inst.codigoInstalacao}</Box>
                                                    <Box
                                                        fontWeight="bold">{inst.logradouro}, {inst.numeroResidencia}, {inst.bairro}</Box>
                                                    <Box
                                                        fontWeight="bold">Complemento: {inst.cidade} - {inst.estado}</Box>
                                                    <Box fontWeight="bold">CEP: {inst.cep}</Box>

                                                    <Box className={`status ${inst?.suspensao ? "suspensa" : inst.status === "Ativa" ? "ativa" : "inativa"}`}>
                                                        {inst?.suspensao ? "Suspensa" : inst.status}
                                                    </Box>

                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Box>
                ) : (
                    <Box>Não foi localizada nenhuma instalação.</Box>
                )}
            </Box>
        </>
    );
};

export default ListaInstalacoes;
