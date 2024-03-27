import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'On the way',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Delivered',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  
];

export default function OrderStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  

  return (
    <Box sx={{maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent> <Box sx={{backgroundColor:"#F6F8FF", p:"10px", borderRadius:"0.4rem"}}>{step.description}</Box></StepContent>
            
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Product Delivered  </Typography>
          
        </Paper>
      )}
    </Box>
  );
}