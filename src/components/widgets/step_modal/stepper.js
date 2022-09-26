import React from 'react'
import { useFormContext } from 'react-hook-form'
import MobileStepper from '@mui/material/MobileStepper'
import { Btn, FormBtn } from '../btn'

export default function Stepper({ step, setStep, total, preview }) {

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
        steps={total}
        position="static"
        activeStep={step}
        className="grow bg-transparent"
        nextButton={
          step === (total - 1) ? (
            <FormBtn
              content={<span className="flex items-center">Submit</span>}
              disabled={!isDirty || !isValid}
              className="btn bg-green-500 hover:bg-green-600 h-10 rounded"
            />
          ) : (
            <Btn
              content={
                <span className="flex items-center">
                  {step === (total - 2) ? "Preview" : "Next"}
                </span>
              }
              className="btn h-10 bg-primary"
              disabled={!isDirty || !isValid}
              click={handleNext}
            />
          )
        }
        backButton={
          <Btn
            content={<span className="flex items-center">Back</span>}
            className="btn h-10 bg-primary"
            click={handleBack}
            disabled={step === 0}
          />
        }
      />
    </>
  );
}
