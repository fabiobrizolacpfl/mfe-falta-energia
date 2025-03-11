import Box from "@mui/material/Box";
import {Card, CardContent, FormControlLabel, Radio, Typography} from "@mui/material";
import * as React from "react";

const SelectInstalacaoCard = ({instalacao}) => {

    return(

        <Box display="flex" alignItems="center" mb={2} key={instalacao.codigo}>
            <FormControlLabel
                value={instalacao.codigoInstalacao}
                control={<Radio/>}
                sx={{marginBottom: 10}}
                label={null}
            />
            <Card variant="outlined" className="falta-energia-card-select-instalacao">
                <CardContent sx={{bgcolor: "var(--light-gray-bg)"}}>
                    <Typography variant="body2">

                        <Box fontWeight="bold">Nº da
                            Instalação: {instalacao.codigoInstalacao}</Box>
                        <Box
                            fontWeight="bold">{instalacao.logradouro}, {instalacao.numeroResidencia}, {instalacao.bairro}</Box>
                        <Box
                            fontWeight="bold">Complemento: {instalacao.cidade} - {instalacao.estado}</Box>
                        <Box fontWeight="bold">CEP: {instalacao.cep}</Box>

                        <Box
                            className={`status ${instalacao?.suspensao ? "suspensa" : instalacao.status === "Ativa" ? "ativa" : "inativa"}`}>
                            {instalacao?.suspensao ? "Suspensa" : instalacao.status}
                        </Box>

                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default SelectInstalacaoCard;