import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const steps = [
  {
    label: 'On the way',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    status: 'Pickup',
    address: '769 Ward road,Texas,77789',
    time: ' 7/7/2020 : 10 am - 22pm',
    name: 'John',
    number: '+2 22787876872',
    email: 'chings@gmail.com'
  },
  {
    label: 'Delivered',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
    status: 'Delivered',
    address: '769 Ward road,Texas,77789',
    time: ' 7/7/2020 : 10 am - 22pm',
    name: 'John Smoker',
    number: '+2 22787876872',
    email: 'chings@gmail.com'
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
            <StepContent>
            <Stack gap={0.5} sx={{ backgroundColor: '#f8f9fb', borderRadius: '10px', padding: '10px' }}>
                                <Box color={'#adadb9'}>{step.status}</Box>
                                <Box fontWeight={'600'}>{step.address}</Box>
                                <Box display={'flex'} color={'#adadb9'} alignItems={'center'}><CalendarMonthIcon sx={{ color: '#1a76d2' }} /> {step.time}</Box>
                                <Box display={'flex'} color={'#adadb9'} alignItems={'center'}><PersonIcon sx={{ color: '#1a76d2' }} />{step.name}</Box>
                                <Box display={'flex'} color={'#adadb9'} alignItems={'center'}><CallIcon sx={{ color: '#1a76d2' }} />{step.number}</Box>
                                <Box display={'flex'} color={'#adadb9'} alignItems={'center'}><EmailIcon sx={{ color: '#1a76d2' }} />{step.email}</Box>
            </Stack>
            </StepContent>
            
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