import Box from "@mui/material/Box";
import * as React from "react";
import {FormControl,RadioGroup, Typography,Pagination, PaginationItem} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SelectInstalacaoCard from "./SelectInstalacaoCard";

const ListaInstalacoes = ({instalacoes, setInstalacao, instalacao, setCurrentPage, currentPage}) => {

    if(typeof instalacoes === 'undefined') return null;

    //#region FEITO ASSIM POIS O BACKEND RETORNA PAGINAÇÃO ERRADA
    const quantidadeRegistros = instalacoes?.quantidadeRegistros;

    if(quantidadeRegistros){
        instalacoes = instalacoes.instalacoes
    }

    const contemInstalacoes = instalacoes?.length > 0;

    if(!contemInstalacoes){
        return(
            <Box className="falta-energia-container" >
                Não foi localizada nenhuma instalação.
            </Box>
        )
    }

    const itemsPerPage = 12; //retorno do backend é sempre size 12
    const totalPages = Math.ceil(quantidadeRegistros / itemsPerPage);
    //#endregion

    return (
        <>
            <Box mb={1}>
                <span>Selecione a instalação</span>
            </Box>

            <Box className="falta-energia-container">

                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={instalacao?.codigoInstalacao ?? ''}
                        onChange={(e) =>
                            setInstalacao(instalacoes.find(inst => inst.codigoInstalacao === e.target.value))
                        }>

                        {instalacoes.map((inst) => (
                            <SelectInstalacaoCard instalacao={inst}/>
                        ))}

                    </RadioGroup>
                </FormControl>

                {totalPages > 1 &&
                    <Box className="falta-energia-container pagination">
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={(e, page) => setCurrentPage(page)}
                            renderItem={(item) => (
                                <PaginationItem
                                    {...item}
                                    slots={{
                                        previous: () => (
                                            <Box display="flex" alignItems="center">
                                                <KeyboardBackspaceIcon fontSize="small" />
                                                <Typography variant="body2" sx={{ ml: 1 }}>Anterior</Typography>
                                            </Box>
                                        ),
                                        next: () => (
                                            <Box display="flex" alignItems="center">
                                                <Typography variant="body2" sx={{ mr: 1 }}>Próximo</Typography>
                                                <EastIcon fontSize="small" />
                                            </Box>
                                        ),
                                    }}
                                    sx={item.type === "page" ? { display: "none" } : {}}
                                />
                            )}
                        />
                    </Box>
                }
            </Box>

        </>
    );
};

export default ListaInstalacoes;
