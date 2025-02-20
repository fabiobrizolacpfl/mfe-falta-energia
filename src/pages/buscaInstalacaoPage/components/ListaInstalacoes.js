import Box from "@mui/material/Box";
import * as React from "react";
import {
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";

const ListaInstalacoes = ({instalacoes}) => {

    const contemInstalacoes = instalacoes?.length > 0;

    return(
        <>
            {contemInstalacoes &&
                <Box mb={1}>
                <span>Selecione a instalacão</span>
                </Box>
            }

            <Box className="falta-energia-container">
                {!contemInstalacoes ? (
                    <Box>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                {instalacoes.map((instalacao) => (
                                    <Box display="flex" alignItems="center" mb={2} key={instalacao.codigo}>
                                        <FormControlLabel
                                            value={instalacao.codigo}
                                            control={<Radio/>}
                                            label={instalacao.nome}
                                            sx={{ marginRight: 2 }}
                                        />
                                        <Card variant="outlined" sx={{ width: 150 }}>
                                            <CardContent>
                                                <Typography variant="body2">{instalacao.nome} Card</Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Box>
                ):(
                    <Box>
                        Não foi localizada nenhuma instalação.
                    </Box>
                )}
            </Box>
        </>
    );
}

export default ListaInstalacoes;