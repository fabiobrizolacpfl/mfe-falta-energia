import React from "react";
import { Card, Grid, Box, Typography } from "@mui/material";
import StepHeaderComponent from "../stepHeader/StepHeaderComponent";
import FlashOffIcon from "@mui/icons-material/FlashOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepHeaderCardComponent = ({ steps, currentStep }) => {

    const isLastStep = currentStep === 3;

    return (
        <Card className="header-steps" elevation={0}>
            <Grid container spacing={2} alignItems="center">
                <Grid item sm={9}>
                    <Box display="flex" alignItems="center">
                        <div className="icon-bolt-slash">
                            <FlashOffIcon sx={{ fontSize: "20px" }} />
                        </div>
                        <div className="title">Falta de energia</div>
                        <span className="sub-title">Informe aqui se você está sem energia</span>
                    </Box>
                </Grid>

                <Grid item sm={3}>
                    <Box display="flex" alignItems="center" justifyContent="flex-end">
                        <StepHeaderComponent steps={steps} activeStep={currentStep} />

                        {isLastStep && (
                            <Box display="flex" alignItems="center" gap={1} ml={2}>
                                <CheckCircleIcon sx={{ fontSize: "27px", color: "green" }} />
                            </Box>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
};

export default StepHeaderCardComponent;