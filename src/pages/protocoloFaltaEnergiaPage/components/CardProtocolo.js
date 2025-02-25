import Box from "@mui/material/Box";
import * as React from "react";
import {
    Card,
    CardContent,
    FormControl,
    Typography
} from "@mui/material";
import CustomButton from "../../../components/customButton/CustomButton";


const CardProtocolo = ({ protocolo }) => {

    const dataHoraProtocolo = new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <Box >
            <FormControl>
                <Card variant="outlined" className="falta-energia-card" sx={{ marginTop: 2, marginBottom: 4 }}>
                    <CardContent sx={{ bgcolor: "var(--light-gray-bg)", width: 900 }}>
                        <Typography variant="body2">
                            <Box className="title-protocolo" color="#0098d1" fontWeight="bold">Protocolo: {protocolo}</Box>
                            <Box className="text-protocolo" fontSize={15} color="#778ca2">{dataHoraProtocolo}</Box>
                            <Box className="text-protocolo" marginTop={3} color="#778ca2">Participe da nossa pesquisa: são apenas 3 perguntas e leva menos de 1 minuto. Para responder agora  <Typography
                                component="a"
                                href="https://pt.surveymonkey.com/r/cpfl-falta-energia"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: "#0098d1", textDecoration: "none", fontWeight: "bold", marginLeft: 0.5 }}
                            >
                                clique aqui
                            </Typography>
                            </Box>
                            <Box sx={{ mt: 5, display: "flex", justifyContent: "center", gap: 3 }}>
                                <CustomButton label="Acompanhe seu pedido" />
                                <CustomButton label="Enviar por email" />
                            </Box>
                        </Typography>
                    </CardContent>
                </Card>
            </FormControl>
            <FormControl>
                <Card variant="outlined" className="falta-energia-card" sx={{ marginTop: 2, marginBottom: 4 }}>
                    <CardContent sx={{ bgcolor: "var(--light-gray-bg)", width: 900 }}>
                        <Typography variant="body2">
                            <Box
                                className="text-protocolo"
                                sx={{
                                    fontSize: "0.72rem",
                                    color: "#778ca2",
                                    marginTop: 3,
                                    display: "inline",

                                }}
                            >
                                Acesse o
                                <Typography
                                    href="#"//falta adicionar a href
                                    style={{
                                        fontSize: "inherit",
                                        color: "#0098d1",
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                        paddingLeft: "4px",
                                        paddingRight: "4px",
                                        display: "inline",
                                    }}
                                    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                                    onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                                >
                                    Aviso de Privacidade
                                </Typography>
                                e conheça os compromissos da CPFL com seus dados pessoais. Para exercer os direitos da LGPD - Lei Geral de Proteção de Dados -<br />
                                acesse nosso formulário eletrônico ( <Typography
                                    href="#"//falta adicionar a href
                                    style={{
                                        fontSize: "inherit",
                                        color: "#0098d1",
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                        display: "inline",
                                    }}
                                    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                                    onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                                >Aviso de Privacidade</Typography>) ou entre em contato através do canal de atendimento da sua Distribuidora.
                            </Box>
                        </Typography>
                    </CardContent>
                </Card>
            </FormControl>

        </Box>
    );
};

export default CardProtocolo;
