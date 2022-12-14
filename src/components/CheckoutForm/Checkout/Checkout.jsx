/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@mui/material';

const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <div className="toolbar" />
      <main className="layout">
        <Paper className="paper">
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={0} className="stepper">
            {
                steps.map((step) => (
                  <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                ))
            }
          </Stepper>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;

