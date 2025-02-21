import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CustomButton from "../../../components/customButton/CustomButton";
import {Grid} from "@mui/material";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';




    const CardMeuImovel = ({  setOpenModal }) => {

    return (
        
        <Box>
        <Grid container spacing={5}>
            <Grid item md={5}>
                <Box className="falta-energia-container-warning">
                <WarningAmberIcon sx={{ width:40, height:50 }} />
                    <Typography>
                        Nossa equipe não pode efetuar reparos nas Instalações internas. Se a falta<br></br> de energia está afetando apenas sua residência, verifique os disjuntores<br></br> internos ou procure um eletricista de sua preferência. Caso não seja<br></br> identificado nenhum problema, entre em contato conosco.
                    </Typography>
                    <CustomButton      
                        height="50px"  
                        label="Como verificar meu disjuntor?"
                        onClick={() => setOpenModal(true)}
                    />
                </Box>
            </Grid>
        </Grid>
    </Box>
    );


}




export default CardMeuImovel;