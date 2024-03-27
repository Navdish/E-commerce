import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
const steps = ['At Pickup Location', 'Departed from Pickup location', 'Arrived Destination', 'Delivered'];

export default function StepperComponent() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1}sx={{
            "& .MuiStepConnector-line": {
              border: "2px #e8e8e8 dashed",
            },
        }}>
        {steps.map((label) => { 
          
          return(
          <Step key={label} sx={{p:"40px"}}>
            <StepLabel >{label}</StepLabel>
          </Step>
        )})}
      </Stepper>
    </Box>
  );
}
