import React from "react";
import { Card, Grid, Box } from "@mui/material";
import StepHeaderComponent from "../stepHeader/StepHeaderComponent";
import FlashOffIcon from "@mui/icons-material/FlashOff";

const StepHeaderCardComponent = ({ steps, currentStep }) => {
    return (
        <Card className="header-steps" elevation={0}>
            <Grid container spacing={2} alignItems="center">
                <Grid item sm={9}>
                    <Box display="flex" alignItems="center">
                        <div className="icon-bolt-slash">
                            <FlashOffIcon sx={{fontSize: "20px"}}/>
                        </div>
                        <div className="title">Falta de energia</div>
                        <span className="sub-title">Informe aqui se você está sem energia</span>
                    </Box>
                </Grid>
                <Grid item sm={3}>
                    <StepHeaderComponent steps={steps} activeStep={currentStep} />
                </Grid>
            </Grid>
        </Card>
    );
};

export default StepHeaderCardComponent;
