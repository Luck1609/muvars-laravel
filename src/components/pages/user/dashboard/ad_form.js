import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import ImageSelection from "components/widgets/image_selection";
import Input from "components/widgets/input";
import RadioOptions from "components/widgets/radio";
import { Btn, FormBtn } from "components/widgets/btn";
import useAPIContext from "hooks/api_context";




import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function AdForm({ user }) {
  const methods = useForm({ mode: "all" });
  const { makeRequest } = useAPIContext()

  const { handleSubmit} = methods

  const submit = async (data) => {
    const formdata = new FormData();

    const { img, ...payload } = data;

    Object.entries(payload).forEach(([key, value]) => {
      formdata.append(key, value)
    });

    img.forEach(image => {
      formdata.append('img[]', image)
    });

    makeRequest({
      method: 'post',
      url: `/posts`,
      payload: formdata
    })
  }

  return (
    <>

      <FormProvider {...methods}>
        <form className="grid grid-cols-2 gap-7" onSubmit={handleSubmit(submit)}>
          <div className="flex col-span-2 items-center border-b py-2">
            <label htmlFor="" className="font-medium grow text-lg">
              Create Your Advertisement
            </label>

            {/* {
              !user ? (
                <Btn 
                  content="Submit" 
                  className="btn bg-sky-500 hover:bg-sky-600" 

                />
              ) : (
                <FormBtn content="Submit" className="btn bg-sky-500 hover:bg-sky-600" />
              )
            } */}
          </div>

          {/* <div className="col-span-2 w-4/5 m-auto">
            <HorizontalNonLinearStepper />
          </div> */}

          <Input name="title" label="Post title" className="" />

          <Input 
            name="category" 
            label="Vehicle type" 
            options={[
              {
                label: 'Cars',
                value: 'cars'
              },
              {
                label: 'SUV\'s',
                value: 'suv'
              },
              {
                label: 'Mini bus',
                value: 'mini bus'
              },
              {
                label: 'Buses',
                value: 'buses'
              },
              {
                label: 'Trucks & Trailers',
                value: 'trucks_trailers'
              },
            ]} 
            className="" 
          />

          {/* <Input name="area" label="Category" options={[]} className="" /> */}

          <Input name="price" label="Price" className="" />

          <Input name="seats" label="No. of seats" type="number" className="" />

          {/* <Input 
            name="description" 
            label="Description" 
            className="col-span-2"
            rows={4}
            multiline
          /> */}

          <RadioOptions
            name="negotiable"
            options={[
              {
                label: "Yes",
                value: true,
              },
              {
                label: "No",
                value: false,
              },
            ]}
            label="Is price negotiable?"
          />

          <div className="col-span-2">
            <ImageSelection
              name="img"
              multiple={true}
              cols="grid-cols-6"
              label={
                <>
                  <label className="font-medium block text-lg">
                    Add photos
                  </label>
                  <span className="textsm">
                    The first picture is the post display photo
                  </span>
                </>
              }
            />
          </div>

          
          {
            !user?.agencyId ? (
              <>
                <label className="col-span-2 block font-medium text-lg mt-8">Business information</label>
                <Input name="name" label="Agency name" className="" />
                <Input 
                  name="region" 
                  label="Agency location(region)" 
                  className="" 
                  options={[
                      "Ahafo Region",
                      "Ashanti Region",
                      "Bono Region",
                      "Bono East Region",
                      "Central Region",
                      "Eastern Region",
                      "Greater Accra Region",
                      "North East Region",
                      "Oti Region",
                      "Northern Region",
                      "Savannah Region",
                      "Upper East Region",
                      "Upper West Region",
                      "Volta Region",
                      "Western North Region",
                      "Western Region",
                    ]}
                />
                <Input name="town" label="Agency location(city/town)" className="" />
              </>
            ) : null
          }

          <div className="col-span-2 text-center mt-5">
            {
              !user ? (
                <Btn 
                  content="Submit" 
                  className="btn bg-sky-500 hover:bg-sky-600 w-72 h-12" 

                />
              ) : (
                <FormBtn content="Submit" className="btn bg-sky-500 hover:bg-sky-600 w-72 h-12" />
              )
            }
          </div>          
        </form>
      </FormProvider>
    </>
  );
}



const steps = ['Post details', 'Business information'];

function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
