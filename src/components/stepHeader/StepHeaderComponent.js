import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import HomeIcon from '@mui/icons-material/Home';

function CustomStepIcon(props) {
    const { active, completed ,index } = props;
    return (
        <Box
            sx={{
                width: 24,
                height: 24,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: active || completed ? 'var(--light-blue)' : 'var(--header-steps)',
                color: active || completed ? 'white' : 'text.secondary',
                fontSize: 14,
                fontWeight: 'bold',
                zIndex: 1
            }}
        >
            {index === 0 ? <HomeIcon sx={{ fontSize: 16 }} /> : index}
        </Box>
    );
}

export default function StepHeaderComponent({activeStep = 0, steps}) {
    return (
        <Box>
            <Stepper
                activeStep={activeStep}
                alternativeLabel
                sx={{
                    '& .MuiStepConnector-line': {
                        borderTopWidth: 5,
                        position: 'absolute',
                        left: '-10px',
                        width: '250%',
                        borderTopColor: 'var(--header-steps)'
                    },
                    "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
                        borderTopColor: 'var(--light-blue)',
                    },
                    "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
                        borderTopColor: 'var(--light-blue)',
                    },
                }}
            >
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel StepIconComponent={(props) => <CustomStepIcon {...props} index={index} />}/>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
