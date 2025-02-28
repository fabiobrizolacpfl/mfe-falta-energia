import Box from "@mui/material/Box";
import * as React from "react";
import {
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";

const ListaInstalacoes = ({ instalacoes, selectedInstalacao, onSelectInstalacao }) => {
    const contemInstalacoes = instalacoes?.length > 0;

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
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={selectedInstalacao ? selectedInstalacao.codigo : ''}
                                onChange={(e) =>
                                    onSelectInstalacao(instalacoes.find(inst => inst.codigo === e.target.value))
                                }
                            >
                                {instalacoes.map((instalacao) => (
                                    <Box display="flex" alignItems="center" mb={2} key={instalacao.codigo}>
                                        <FormControlLabel
                                            value={instalacao.codigo}
                                            control={<Radio />}
                                            sx={{ marginRight: 2, marginBottom: 10, }}
                                        />
                                        <Card variant="outlined" className="falta-energia-card">
                                            <CardContent sx={{ bgcolor: "var(--light-gray-bg)", width: 800 }}>
                                                <Typography variant="body2">
                                                    <Box fontWeight="bold">Nº da Instalação: {instalacao.codigo}</Box>
                                                    <Box fontWeight="bold">{instalacao.endereco}</Box>
                                                    <Box fontWeight="bold">Complemento:{instalacao.complemento}</Box>
                                                    <Box fontWeight="bold">CEP:{instalacao.cep}</Box>
                                                    <Box
                                                        className={`status ${instalacao.status === "Ativa" ? "ativa" : "desativada"}`}
                                                    >
                                                        {instalacao.status}
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
