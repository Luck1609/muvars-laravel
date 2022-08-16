import React from 'react'
import * as Icons from '@iconscout/react-unicons'
import { useFormContext } from 'react-hook-form'
import MobileStepper from '@mui/material/MobileStepper'
import { Btn, FormBtn } from '../btn'

export default function Stepper({ step, setStep }) {

  const { formState: {isDirty, isValid}} = useFormContext();


  const handleNext = () => {
    setStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <>
      <MobileStepper
        variant="dots"
        steps={5}
        position="static"
        activeStep={step}
        className="grow bg-transparent"
        nextButton={
          step === 2 ? (
            <FormBtn
              content={<span className="flex items-center">Submit</span>}
              disabled={!isDirty || !isValid}
              className="btn bg-teal h-12 rounded-full"
            />
          ) : (

            <Btn
              content={<span className="flex items-center">
                {step === 1 ? "Preview" : "Next"}</span>}
              className="btn h-12 bg-primary"
              disabled={!isDirty || !isValid}
              click={handleNext}
            />
          )
        }
        backButton={
          <Btn
            content={<span className="flex items-center">Back</span>}
            className="btn h-12 bg-primary"
            click={handleBack}
            disabled={step === 0}
          />
        }
      />
    </>
  );
}
